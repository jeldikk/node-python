## Code samples joining nodejs and python
___

#### pre-requisites:

you need to have ```python``` installed as global or local virtual environment and have nodejs configured with ```python-shell``` library

to install ```python-shell``` library use;

```sh
    $ npm install python-shell
```

to create python virtual environment use;
```sh
    $ virtualenv -p python3 venv
```
activate the virtual environment to get into action

```sh
    $ source ./venv/bin/activate
```

install some dummy python module from test.pypi in virtual environment to confirm that, node is using binaries from virtual environment.

```sh
    $ pip install -i https://test.pypi.org/simple  champakraja
```

#### Inspiration and source:

All the code samples are written to acquaint knowledge of executing python scripts from nodejs. so we are using ```python-shell``` nodejs library to achieve this purpose. So all these are implemented from thier official documentation [python-shell docs](https://www.npmjs.com/package/python-shell). visit this for more API usage details.

___
### Code Sample 1:

**_filename_**: run_string.js
Just execute sample python string from nodejs

### Code Sample 2:

_**foldername**_: runFile

This explains how to execute a python script, with out proper control over execution

### Code Sample 3:

**_foldername_**: runFileWithOptions

This explains how to run a python script with Options like python executable path, script path etc...

### Code Sample 4:

**_foldername_**: runFileWithEvents

This explains how to use executables from python virtual environment and with some options on how to print and recieve data in real time.
