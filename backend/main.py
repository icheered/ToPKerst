import asyncio

from topkerst.utils.log_handling import Logging
from topkerst.utils.parameters import Parameters

from topkerst.api.server import Server
from topkerst.state_manager import State_Manager
from topkerst.handlers.db_handler import DB_Handler

async def main(loop):
    parameters = Parameters()
    config = parameters.get_dict()
    logging = Logging(config)
    logger = logging.get_logger()

    state_manager = State_Manager()

    db_handler = DB_Handler(config=config, logger=logger)
    logger.info("Connecting to database...")
    db_conn = db_handler.get_db_connection()

    server = Server(
        config=config, 
        logger=logger, 
        loop=loop, 
        state_manager=state_manager,
        db_conn=db_conn
        )

    logger.info("Starting server...")
    server.start()


if __name__=="__main__":
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    task = asyncio.Task(main(loop))
    try:
        loop.run_forever()
    except KeyboardInterrupt:
        print("Shutting down")
    except Exception as e:
        print(e)
    finally:
        loop.close()