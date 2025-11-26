from setuptools import setup, find_packages
from Cython.Build import cythonize

setup(
    name="fetcher_tool",
    version="0.1",
    packages=find_packages(),
    ext_modules=cythonize("fetcher/core.pyx"),
    install_requires=[
        "requests",
        "schedule"
    ],
    entry_points={
        "console_scripts": [
            "fetcher=cli:main"
        ]
    },
    author="@genesis24AG",
    description="A Cython-powered fetcher tool with optional AWS daily scheduling",
)
