from fastapi import FastAPI
import uvicorn

from topkerst.api.uvicorn import UvicornServer
from fastapi.middleware.cors import CORSMiddleware

from topkerst.api.routers.admin_router import Admin_Router
from topkerst.api.routers.user_router import User_Router

class Server:
    def __init__(self, config, logger, loop, state_manager, db_conn):
        self.config = config
        self.logger = logger
        self.loop = loop
        self.state_manager = state_manager
        self.db_conn = db_conn

        self.app = FastAPI(
            redoc_url=None,
            docs_url="/",
        )

        deps = {}
        deps["config"] = config
        deps["logger"] = logger
        deps["state_manager"] = self.state_manager
        deps["db_conn"] = self.db_conn

        self.app.state.dependencies = deps

        self.app.include_router(
            Admin_Router,
            prefix = "/admin"
        )
        self.app.include_router(
            User_Router,
            prefix = ""
        )
        origins = ["*"]
        self.app.add_middleware(
            CORSMiddleware,
            allow_origins=origins,
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

        uvi_conf = uvicorn.Config(
            app=self.app,
            loop="asyncio",
            host=self.config["API_ADDRESS"],
            port=self.config["API_PORT"],
            reload=True,
            debug=True
        )

        self.server = UvicornServer(uvi_conf)

    def start(self):
        """
        Start the server
        """
        self.loop.create_task(self.server.serve())
