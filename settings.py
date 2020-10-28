from dotenv import load_dotenv
import os
from os.path import join, dirname


def load_config():
    dotenv_path = join(dirname(__file__), '.env')
    load_dotenv(dotenv_path)
