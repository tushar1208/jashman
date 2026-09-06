// Python 1500+ MCQ Question Bank Dataset
const PYTHON_QUESTION_BANK = [
  {
    "id": "py_dat_b_0001",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the data type of the value `3.14` in Python?",
    "opts": [
      "int",
      "float",
      "double",
      "decimal"
    ],
    "ans": 1,
    "exp": "`3.14` is a floating-point number, so its type is `float`."
  },
  {
    "id": "py_dat_b_0002",
    "topic": "datatype",
    "level": "basic",
    "q": "Which of the following is a mutable built-in sequence data type in Python?",
    "opts": [
      "tuple",
      "string",
      "list",
      "frozenset"
    ],
    "ans": 2,
    "exp": "`list` is mutable in Python, allowing modification of elements after creation."
  },
  {
    "id": "py_dat_b_0003",
    "topic": "datatype",
    "level": "basic",
    "q": "What will `type(True)` return in Python?",
    "opts": [
      "<class 'bool'>",
      "<class 'boolean'>",
      "<class 'int'>",
      "<class 'str'>"
    ],
    "ans": 0,
    "exp": "`True` is a boolean value of type `bool`."
  },
  {
    "id": "py_dat_b_0004",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `len('Python 3.10')`?",
    "opts": [
      "10",
      "11",
      "9",
      "12"
    ],
    "ans": 1,
    "exp": "The string 'Python 3.10' contains 11 characters (including spaces and punctuation)."
  },
  {
    "id": "py_dat_b_0005",
    "topic": "datatype",
    "level": "basic",
    "q": "Which of the following data types does NOT allow duplicate elements?",
    "opts": [
      "list",
      "tuple",
      "set",
      "dictionary values"
    ],
    "ans": 2,
    "exp": "A `set` stores only unique elements and automatically removes duplicates."
  },
  {
    "id": "py_dat_b_0006",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `type(5 / 2)` in Python 3?",
    "opts": [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'double'>",
      "<class 'number'>"
    ],
    "ans": 1,
    "exp": "The `/` operator in Python 3 always returns a `float`."
  },
  {
    "id": "py_dat_b_0007",
    "topic": "datatype",
    "level": "basic",
    "q": "Which function returns the memory address of an object in Python?",
    "opts": [
      "id()",
      "addr()",
      "mem()",
      "pointer()"
    ],
    "ans": 0,
    "exp": "`id()` returns the unique identity/memory address of an object."
  },
  {
    "id": "py_dat_b_0008",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the data type of `x = (10)` vs `y = (10,)`?",
    "opts": [
      "tuple, tuple",
      "int, tuple",
      "tuple, int",
      "int, int"
    ],
    "ans": 1,
    "exp": "`x = (10)` is an integer in parentheses, whereas `y = (10,)` with a comma defines a single-element tuple."
  },
  {
    "id": "py_dat_b_0009",
    "topic": "datatype",
    "level": "basic",
    "q": "Which string method converts all characters in a string to uppercase?",
    "opts": [
      "to_upper()",
      "upper()",
      "uppercase()",
      "capitalize()"
    ],
    "ans": 1,
    "exp": "`upper()` converts all characters in a string to uppercase."
  },
  {
    "id": "py_dat_b_0010",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the default value returned when accessing a non-existent key using `dict.get('key')`?",
    "opts": [
      "KeyError",
      "None",
      "0",
      "False"
    ],
    "ans": 1,
    "exp": "`dict.get()` returns `None` by default if the key is not present."
  },
  {
    "id": "py_dat_b_0011",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `strip()` do in Python?",
    "opts": [
      "Removes leading and trailing whitespace",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`strip()` removes leading and trailing whitespace."
  },
  {
    "id": "py_dat_b_0012",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `replace('a', 'b')` do in Python?",
    "opts": [
      "Replaces occurrences of 'a' with 'b'",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`replace('a', 'b')` replaces occurrences of 'a' with 'b'."
  },
  {
    "id": "py_dat_b_0013",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `split()` do in Python?",
    "opts": [
      "Splits a string into a list of words by whitespace",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`split()` splits a string into a list of words by whitespace."
  },
  {
    "id": "py_dat_b_0014",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `join(['a', 'b'])` do in Python?",
    "opts": [
      "Concatenates iterable elements with string separator",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`join(['a', 'b'])` concatenates iterable elements with string separator."
  },
  {
    "id": "py_dat_b_0015",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `find('x')` do in Python?",
    "opts": [
      "Returns lowest index of substring or -1 if not found",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`find('x')` returns lowest index of substring or -1 if not found."
  },
  {
    "id": "py_dat_b_0016",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `startswith('Py')` do in Python?",
    "opts": [
      "Returns true if string starts with specified prefix",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`startswith('Py')` returns True if string starts with specified prefix."
  },
  {
    "id": "py_dat_b_0017",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `endswith('.py')` do in Python?",
    "opts": [
      "Returns true if string ends with specified suffix",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`endswith('.py')` returns True if string ends with specified suffix."
  },
  {
    "id": "py_dat_b_0018",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `isdigit()` do in Python?",
    "opts": [
      "Returns true if all characters are digits",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`isdigit()` returns True if all characters are digits."
  },
  {
    "id": "py_dat_b_0019",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `isalpha()` do in Python?",
    "opts": [
      "Returns true if all characters are alphabetic",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`isalpha()` returns True if all characters are alphabetic."
  },
  {
    "id": "py_dat_b_0020",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `title()` do in Python?",
    "opts": [
      "Converts first character of each word to uppercase",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`title()` converts first character of each word to uppercase."
  },
  {
    "id": "py_dat_b_0021",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `count('a')` do in Python?",
    "opts": [
      "Returns count of non-overlapping occurrences of substring",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`count('a')` returns count of non-overlapping occurrences of substring."
  },
  {
    "id": "py_dat_b_0022",
    "topic": "datatype",
    "level": "basic",
    "q": "What does the string method `lower()` do in Python?",
    "opts": [
      "Converts string to lowercase",
      "Deletes the string",
      "Converts string to a dictionary",
      "Returns the memory size of string"
    ],
    "ans": 0,
    "exp": "`lower()` converts string to lowercase."
  },
  {
    "id": "py_dat_b_0023",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `lst = [1, 2]; lst.append(5)` (or return value)?",
    "opts": [
      "Result/Return: [1, 2, 5]",
      "TypeError",
      "KeyError",
      "Returns None always"
    ],
    "ans": 0,
    "exp": "Appends 5 to end of list [1, 2]"
  },
  {
    "id": "py_dat_b_0024",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `lst = [1, 2]; lst.extend([3, 4])` (or return value)?",
    "opts": [
      "Result/Return: [1, 2, 3, 4]",
      "TypeError",
      "KeyError",
      "Returns None always"
    ],
    "ans": 0,
    "exp": "Extends list [1, 2] with iterable [3, 4]"
  },
  {
    "id": "py_dat_b_0025",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `lst = [1, 2]; lst.pop()` (or return value)?",
    "opts": [
      "Result/Return: 2",
      "TypeError",
      "KeyError",
      "Returns None always"
    ],
    "ans": 0,
    "exp": "Removes and returns last item of [1, 2]"
  },
  {
    "id": "py_dat_b_0026",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `lst = [1, 2]; lst.insert(1, 9)` (or return value)?",
    "opts": [
      "Result/Return: [1, 9, 2]",
      "TypeError",
      "KeyError",
      "Returns None always"
    ],
    "ans": 0,
    "exp": "Inserts 9 at index 1 of [1, 2]"
  },
  {
    "id": "py_dat_b_0027",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `lst = [1, 2]; lst.remove(1)` (or return value)?",
    "opts": [
      "Result/Return: [2]",
      "TypeError",
      "KeyError",
      "Returns None always"
    ],
    "ans": 0,
    "exp": "Removes first occurrence of value 1 from [1, 2]"
  },
  {
    "id": "py_dat_b_0028",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `lst = [1, 2]; lst.clear()` (or return value)?",
    "opts": [
      "Result/Return: []",
      "TypeError",
      "KeyError",
      "Returns None always"
    ],
    "ans": 0,
    "exp": "Removes all elements from the list"
  },
  {
    "id": "py_dat_b_0029",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `lst = [1, 2]; lst.count(2)` (or return value)?",
    "opts": [
      "Result/Return: 1",
      "TypeError",
      "KeyError",
      "Returns None always"
    ],
    "ans": 0,
    "exp": "Returns number of occurrences of value 2 in [1, 2]"
  },
  {
    "id": "py_dat_b_0030",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the result of `lst = [1, 2]; lst.index(2)` (or return value)?",
    "opts": [
      "Result/Return: 1",
      "TypeError",
      "KeyError",
      "Returns None always"
    ],
    "ans": 0,
    "exp": "Returns index of first occurrence of value 2 in [1, 2]"
  },
  {
    "id": "py_dat_b_0031",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `[1, 2, 3, 4, 5][1:4]`?",
    "opts": [
      "[2, 3, 4]",
      "[2, 3, 4] plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`[1, 2, 3, 4, 5][1:4]` evaluates to `[2, 3, 4]`."
  },
  {
    "id": "py_dat_b_0032",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `[1, 2, 3, 4, 5][:3]`?",
    "opts": [
      "[1, 2, 3]",
      "[1, 2, 3] plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`[1, 2, 3, 4, 5][:3]` evaluates to `[1, 2, 3]`."
  },
  {
    "id": "py_dat_b_0033",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `[1, 2, 3, 4, 5][2:]`?",
    "opts": [
      "[3, 4, 5]",
      "[3, 4, 5] plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`[1, 2, 3, 4, 5][2:]` evaluates to `[3, 4, 5]`."
  },
  {
    "id": "py_dat_b_0034",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `[1, 2, 3, 4, 5][::2]`?",
    "opts": [
      "[1, 3, 5]",
      "[1, 3, 5] plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`[1, 2, 3, 4, 5][::2]` evaluates to `[1, 3, 5]`."
  },
  {
    "id": "py_dat_b_0035",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `[1, 2, 3, 4, 5][:-1]`?",
    "opts": [
      "[1, 2, 3, 4]",
      "[1, 2, 3, 4] plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`[1, 2, 3, 4, 5][:-1]` evaluates to `[1, 2, 3, 4]`."
  },
  {
    "id": "py_dat_b_0036",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `[1, 2, 3, 4, 5][-3:]`?",
    "opts": [
      "[3, 4, 5]",
      "[3, 4, 5] plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`[1, 2, 3, 4, 5][-3:]` evaluates to `[3, 4, 5]`."
  },
  {
    "id": "py_dat_b_0037",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `'Python'[1:4]`?",
    "opts": [
      "'yth'",
      "'yth' plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`'Python'[1:4]` evaluates to `'yth'`."
  },
  {
    "id": "py_dat_b_0038",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `'Python'[-1]`?",
    "opts": [
      "'n'",
      "'n' plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`'Python'[-1]` evaluates to `'n'`."
  },
  {
    "id": "py_dat_b_0039",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `'Python'[::-1]`?",
    "opts": [
      "'nohtyP'",
      "'nohtyP' plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`'Python'[::-1]` evaluates to `'nohtyP'`."
  },
  {
    "id": "py_dat_b_0040",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of evaluating `'Python'[::2]`?",
    "opts": [
      "'Pto'",
      "'Pto' plus extra index",
      "IndexError",
      "None"
    ],
    "ans": 0,
    "exp": "`'Python'[::2]` evaluates to `'Pto'`."
  },
  {
    "id": "py_dat_b_0041",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type(42)` in Python?",
    "opts": [
      "<class 'int'>",
      "<class 'object'>",
      "<class 'INT'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`42` is an instance of `<class 'int'>`."
  },
  {
    "id": "py_dat_b_0042",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type(3.14159)` in Python?",
    "opts": [
      "<class 'float'>",
      "<class 'object'>",
      "<class 'FLOAT'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`3.14159` is an instance of `<class 'float'>`."
  },
  {
    "id": "py_dat_b_0043",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type('Hello')` in Python?",
    "opts": [
      "<class 'str'>",
      "<class 'object'>",
      "<class 'STR'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`'Hello'` is an instance of `<class 'str'>`."
  },
  {
    "id": "py_dat_b_0044",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type([1, 2])` in Python?",
    "opts": [
      "<class 'list'>",
      "<class 'object'>",
      "<class 'LIST'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`[1, 2]` is an instance of `<class 'list'>`."
  },
  {
    "id": "py_dat_b_0045",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type((1, 2))` in Python?",
    "opts": [
      "<class 'tuple'>",
      "<class 'object'>",
      "<class 'TUPLE'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`(1, 2)` is an instance of `<class 'tuple'>`."
  },
  {
    "id": "py_dat_b_0046",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type({'a': 1})` in Python?",
    "opts": [
      "<class 'dict'>",
      "<class 'object'>",
      "<class 'DICT'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`{'a': 1}` is an instance of `<class 'dict'>`."
  },
  {
    "id": "py_dat_b_0047",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type({1, 2, 3})` in Python?",
    "opts": [
      "<class 'set'>",
      "<class 'object'>",
      "<class 'SET'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`{1, 2, 3}` is an instance of `<class 'set'>`."
  },
  {
    "id": "py_dat_b_0048",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type(True)` in Python?",
    "opts": [
      "<class 'bool'>",
      "<class 'object'>",
      "<class 'BOOL'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`True` is an instance of `<class 'bool'>`."
  },
  {
    "id": "py_dat_b_0049",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type(None)` in Python?",
    "opts": [
      "<class 'NoneType'>",
      "<class 'object'>",
      "<class 'NONETYPE'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`None` is an instance of `<class 'NoneType'>`."
  },
  {
    "id": "py_dat_b_0050",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type(3 + 4j)` in Python?",
    "opts": [
      "<class 'complex'>",
      "<class 'object'>",
      "<class 'COMPLEX'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`3 + 4j` is an instance of `<class 'complex'>`."
  },
  {
    "id": "py_dat_b_0051",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type(b'hello')` in Python?",
    "opts": [
      "<class 'bytes'>",
      "<class 'object'>",
      "<class 'BYTES'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`b'hello'` is an instance of `<class 'bytes'>`."
  },
  {
    "id": "py_dat_b_0052",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of `type(bytearray(5))` in Python?",
    "opts": [
      "<class 'bytearray'>",
      "<class 'object'>",
      "<class 'BYTEARRAY'>",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`bytearray(5)` is an instance of `<class 'bytearray'>`."
  },
  {
    "id": "py_dat_i_0053",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of evaluating `d = {'a': 1, 'b': 2}; d.update({'b': 3, 'c': 4})`?",
    "opts": [
      "{'a': 1, 'b': 3, 'c': 4}",
      "KeyError",
      "AttributeError",
      "{}"
    ],
    "ans": 0,
    "exp": "update() merges key-values, overwriting existing keys"
  },
  {
    "id": "py_dat_i_0054",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of evaluating `d = {'a': 1}; d.setdefault('b', 2)`?",
    "opts": [
      "2",
      "KeyError",
      "AttributeError",
      "{}"
    ],
    "ans": 0,
    "exp": "setdefault() returns value of key if in dict, else sets key to default"
  },
  {
    "id": "py_dat_i_0055",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of evaluating `d = {'a': 1, 'b': 2}; d.pop('a')`?",
    "opts": [
      "1",
      "KeyError",
      "AttributeError",
      "{}"
    ],
    "ans": 0,
    "exp": "pop() removes specified key and returns its value"
  },
  {
    "id": "py_dat_i_0056",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of evaluating `d = {'a': 1, 'b': 2}; list(d.keys())`?",
    "opts": [
      "['a', 'b']",
      "KeyError",
      "AttributeError",
      "{}"
    ],
    "ans": 0,
    "exp": "keys() returns dict_keys view object"
  },
  {
    "id": "py_dat_i_0057",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of evaluating `d = {'a': 1, 'b': 2}; list(d.values())`?",
    "opts": [
      "[1, 2]",
      "KeyError",
      "AttributeError",
      "{}"
    ],
    "ans": 0,
    "exp": "values() returns dict_values view object"
  },
  {
    "id": "py_dat_i_0058",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of evaluating `dict.fromkeys(['x', 'y'], 0)`?",
    "opts": [
      "{'x': 0, 'y': 0}",
      "KeyError",
      "AttributeError",
      "{}"
    ],
    "ans": 0,
    "exp": "fromkeys() creates a new dictionary with specified keys and value"
  },
  {
    "id": "py_dat_a_0059",
    "topic": "datatype",
    "level": "advance",
    "q": "What happens when attempting `d = {[1, 2]: 'list'}` in Python?",
    "opts": [
      "Raises TypeError: unhashable type: 'list'",
      "Creates dict successfully",
      "Raises KeyError",
      "Converts list to tuple automatically"
    ],
    "ans": 0,
    "exp": "Lists are mutable and unhashable, so they cannot be used as dictionary keys."
  },
  {
    "id": "py_dat_a_0060",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of `a = [1, 2]; b = a; b += [3]; print(a)`?",
    "opts": [
      "[1, 2, 3]",
      "[1, 2]",
      "TypeError",
      "[3]"
    ],
    "ans": 0,
    "exp": "`+=` mutates the list `a` in-place, so both `a` and `b` reference `[1, 2, 3]`."
  },
  {
    "id": "py_dat_a_0061",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of `a = [1, 2]; b = a; b = b + [3]; print(a)`?",
    "opts": [
      "[1, 2]",
      "[1, 2, 3]",
      "TypeError",
      "[3]"
    ],
    "ans": 0,
    "exp": "`b = b + [3]` creates a new list assigned to `b`, leaving `a` unchanged as `[1, 2]`."
  },
  {
    "id": "py_dat_a_0062",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the difference between `is` and `==` in Python?",
    "opts": [
      "`is` checks identity (memory location), `==` checks value equality",
      "`is` checks value, `==` checks identity",
      "They are completely identical",
      "`is` is only for strings"
    ],
    "ans": 0,
    "exp": "`is` evaluates if two variables point to the same memory object, `==` checks if values match."
  },
  {
    "id": "py_dat_a_0063",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the result of `sys.intern('hello') is sys.intern('hello')`?",
    "opts": [
      "True",
      "False",
      "TypeError",
      "Depends on platform"
    ],
    "ans": 0,
    "exp": "String interning guarantees that identical interned strings share the same memory location."
  },
  {
    "id": "py_dat_a_0064",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of `bool(float('nan'))` in Python?",
    "opts": [
      "True",
      "False",
      "ValueError",
      "None"
    ],
    "ans": 0,
    "exp": "`float('nan')` is a valid non-zero float object, so `bool(float('nan'))` evaluates to `True`."
  },
  {
    "id": "py_dat_a_0065",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the result of `0.1 + 0.2 == 0.3` in Python?",
    "opts": [
      "False",
      "True",
      "SyntaxError",
      "PrecisionError"
    ],
    "ans": 0,
    "exp": "Due to IEEE 754 floating-point representation, `0.1 + 0.2` is `0.30000000000000004`, which is not equal to `0.3`."
  },
  {
    "id": "py_dat_a_0066",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of `hash((1, [2, 3]))` in Python?",
    "opts": [
      "TypeError: unhashable type: 'list'",
      "Integer hash value",
      "AttributeError",
      "0"
    ],
    "ans": 0,
    "exp": "A tuple is only hashable if all of its elements are hashable. Since it contains a mutable `list`, it raises TypeError."
  },
  {
    "id": "py_con_b_0067",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What keyword is used for additional conditional branches in Python?",
    "opts": [
      "else if",
      "elif",
      "elseif",
      "case"
    ],
    "ans": 1,
    "exp": "Python uses `elif` for secondary conditional branches."
  },
  {
    "id": "py_con_b_0068",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of `if 5 > 3: print('A') else: print('B')` (formatted properly)?",
    "opts": [
      "A",
      "B",
      "SyntaxError",
      "None"
    ],
    "ans": 0,
    "exp": "Since 5 > 3 is True, 'A' is printed."
  },
  {
    "id": "py_con_b_0069",
    "topic": "conditional statement",
    "level": "basic",
    "q": "Which operator is used to evaluate ternary conditional expressions in Python?",
    "opts": [
      "? :",
      "if ... else",
      "switch ... case",
      "when ... then"
    ],
    "ans": 1,
    "exp": "Python uses `x if condition else y` for ternary conditional logic."
  },
  {
    "id": "py_con_b_0070",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the truth value of `bool(0)` in Python?",
    "opts": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "ans": 1,
    "exp": "Numerical zero `0` evaluates to `False` in boolean context."
  },
  {
    "id": "py_con_b_0071",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the truth value of `bool('')` (empty string) in Python?",
    "opts": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "ans": 1,
    "exp": "An empty string `''` evaluates to `False` in Python."
  },
  {
    "id": "py_con_b_0072",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the truth value of `bool([0])` (list containing 0)?",
    "opts": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "A non-empty list `[0]` evaluates to `True` regardless of its contents."
  },
  {
    "id": "py_con_b_0073",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the result of `10 if True else 20`?",
    "opts": [
      "10",
      "20",
      "True",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "The condition is True, so 10 is returned."
  },
  {
    "id": "py_con_b_0074",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the result of `10 if False else 20`?",
    "opts": [
      "10",
      "20",
      "False",
      "SyntaxError"
    ],
    "ans": 1,
    "exp": "The condition is False, so 20 is returned."
  },
  {
    "id": "py_con_b_0075",
    "topic": "conditional statement",
    "level": "basic",
    "q": "Which of the following values evaluates to `True` in a conditional statement?",
    "opts": [
      "0.0",
      "[]",
      "'Hello'",
      "None"
    ],
    "ans": 2,
    "exp": "Non-empty string `'Hello'` evaluates to `True`."
  },
  {
    "id": "py_con_b_0076",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of `if not False: print('Yes')`?",
    "opts": [
      "Yes",
      "No",
      "SyntaxError",
      "Nothing"
    ],
    "ans": 0,
    "exp": "`not False` is `True`, so 'Yes' is printed."
  },
  {
    "id": "py_con_b_0077",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is printed by `x = 0; print('Pos' if x > 0 else ('Zero' if x == 0 else 'Neg'))`?",
    "opts": [
      "Zero",
      "Pos",
      "Neg",
      "Zero"
    ],
    "ans": 0,
    "exp": "Evaluating conditional logic for `x = 0` gives `Zero`."
  },
  {
    "id": "py_con_b_0078",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is printed by `x = 1; print('Pos' if x > 0 else ('Zero' if x == 0 else 'Neg'))`?",
    "opts": [
      "Pos",
      "Pos",
      "Neg",
      "Zero"
    ],
    "ans": 0,
    "exp": "Evaluating conditional logic for `x = 1` gives `Pos`."
  },
  {
    "id": "py_con_b_0079",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is printed by `x = -5; print('Pos' if x > 0 else ('Zero' if x == 0 else 'Neg'))`?",
    "opts": [
      "Neg",
      "Pos",
      "Neg",
      "Zero"
    ],
    "ans": 0,
    "exp": "Evaluating conditional logic for `x = -5` gives `Neg`."
  },
  {
    "id": "py_con_b_0080",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is printed by `x = 10; print('Pos' if x > 0 else ('Zero' if x == 0 else 'Neg'))`?",
    "opts": [
      "Pos",
      "Pos",
      "Neg",
      "Zero"
    ],
    "ans": 0,
    "exp": "Evaluating conditional logic for `x = 10` gives `Pos`."
  },
  {
    "id": "py_con_b_0081",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is printed by `x = 100; print('Pos' if x > 0 else ('Zero' if x == 0 else 'Neg'))`?",
    "opts": [
      "Pos",
      "Pos",
      "Neg",
      "Zero"
    ],
    "ans": 0,
    "exp": "Evaluating conditional logic for `x = 100` gives `Pos`."
  },
  {
    "id": "py_con_a_0082",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What does short-circuit evaluation mean for `A and B` in Python?",
    "opts": [
      "If A is False, B is not evaluated",
      "If A is True, B is not evaluated",
      "Both A and B are always evaluated",
      "B is evaluated first"
    ],
    "ans": 0,
    "exp": "In `and`, if the left operand is falsy, Python short-circuits and immediately returns it without evaluating the right operand."
  },
  {
    "id": "py_con_a_0083",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of `0 or 'Python'` in Python?",
    "opts": [
      "'Python'",
      "0",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "`or` returns the first truthy operand, which is `'Python'`."
  },
  {
    "id": "py_con_a_0084",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of `'Python' and 'Rocks'` in Python?",
    "opts": [
      "'Rocks'",
      "'Python'",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "`and` returns the first falsy value or the last value if all are truthy, returning `'Rocks'`."
  },
  {
    "id": "py_con_a_0085",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of `x = 10; if (n := x * 2) > 15: print(n)` in Python 3.8+?",
    "opts": [
      "20",
      "15",
      "True",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "The walrus operator `:=` assigns `20` to `n` inside the conditional expression and evaluates `20 > 15` as True."
  },
  {
    "id": "py_con_a_0086",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What feature was introduced in Python 3.10 for multi-way structural pattern matching?",
    "opts": [
      "switch ... case",
      "select ... case",
      "choose ... case",
      "match ... case"
    ],
    "ans": 3,
    "exp": "Python 3.10 introduced structural pattern matching via `match ... case`."
  },
  {
    "id": "py_con_a_0087",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What does `_` represent in a Python 3.10 `match ... case` statement?",
    "opts": [
      "Wildcard / default catch-all case",
      "Private variable",
      "Error handler",
      "Loop counter"
    ],
    "ans": 0,
    "exp": "`case _:` acts as the default wildcard pattern matching any value."
  },
  {
    "id": "py_con_a_0088",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the result of `1 < 2 < 3 < 4` vs `1 < 2 > 3` in Python?",
    "opts": [
      "True and False",
      "True and True",
      "False and False",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Python chains comparisons: `1 < 2 < 3 < 4` is `1 < 2 and 2 < 3 and 3 < 4` (True), while `1 < 2 > 3` is `1 < 2 and 2 > 3` (False)."
  },
  {
    "id": "py_loo_b_0089",
    "topic": "loops",
    "level": "basic",
    "q": "Which keyword is used to skip the rest of the current iteration and move to the next iteration of a loop?",
    "opts": [
      "break",
      "continue",
      "pass",
      "skip"
    ],
    "ans": 1,
    "exp": "`continue` skips the remainder of the current loop iteration."
  },
  {
    "id": "py_loo_b_0090",
    "topic": "loops",
    "level": "basic",
    "q": "Which keyword is used to terminate a loop immediately?",
    "opts": [
      "stop",
      "exit",
      "break",
      "return"
    ],
    "ans": 2,
    "exp": "`break` immediately terminates the loop."
  },
  {
    "id": "py_loo_b_0091",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of `list(range(5))`?",
    "opts": [
      "[0, 1, 2, 3, 4]",
      "[1, 2, 3, 4, 5]",
      "[0, 1, 2, 3, 4, 5]",
      "[5]"
    ],
    "ans": 0,
    "exp": "`range(5)` generates numbers from 0 up to 4."
  },
  {
    "id": "py_loo_b_0092",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of `list(range(2, 10, 2))`?",
    "opts": [
      "[2, 4, 6, 8]",
      "[2, 4, 6, 8, 10]",
      "[2, 3, 4, 5, 6, 7, 8, 9]",
      "[4, 6, 8, 10]"
    ],
    "ans": 0,
    "exp": "`range(2, 10, 2)` starts at 2, increments by 2, and stops before 10."
  },
  {
    "id": "py_loo_b_0093",
    "topic": "loops",
    "level": "basic",
    "q": "What does the `pass` statement do inside a loop body?",
    "opts": [
      "Terminates loop",
      "Does nothing (null placeholder)",
      "Restarts loop",
      "Skips next item"
    ],
    "ans": 1,
    "exp": "`pass` is a null statement used as a placeholder."
  },
  {
    "id": "py_loo_b_0094",
    "topic": "loops",
    "level": "basic",
    "q": "When does the `else` clause attached to a Python `for` or `while` loop execute?",
    "opts": [
      "Only when an exception occurs",
      "When the loop completes normally without hitting `break`",
      "When `break` is executed",
      "Every iteration"
    ],
    "ans": 1,
    "exp": "The loop `else` block executes when the loop finishes iterating naturally without encountering `break`."
  },
  {
    "id": "py_loo_b_0095",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of `for i in range(3): pass; print(i)`?",
    "opts": [
      "2",
      "3",
      "0 1 2",
      "Error"
    ],
    "ans": 0,
    "exp": "After loop finishes naturally, the loop variable `i` retains its last assigned value `2`."
  },
  {
    "id": "py_loo_b_0096",
    "topic": "loops",
    "level": "basic",
    "q": "Which function allows iterating over a sequence while tracking index and value simultaneously?",
    "opts": [
      "enumerate()",
      "zip()",
      "track()",
      "index()"
    ],
    "ans": 0,
    "exp": "`enumerate()` yields `(index, value)` pairs during iteration."
  },
  {
    "id": "py_loo_b_0097",
    "topic": "loops",
    "level": "basic",
    "q": "Which function allows iterating over two or more sequences in parallel?",
    "opts": [
      "parallel()",
      "zip()",
      "combine()",
      "pair()"
    ],
    "ans": 1,
    "exp": "`zip()` aggregates elements from each of the iterables in parallel."
  },
  {
    "id": "py_loo_b_0098",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of `sum(range(1, 6))`?",
    "opts": [
      "15",
      "10",
      "21",
      "5"
    ],
    "ans": 0,
    "exp": "`range(1, 6)` generates 1, 2, 3, 4, 5. Sum is 1+2+3+4+5 = 15."
  },
  {
    "id": "py_loo_b_0099",
    "topic": "loops",
    "level": "basic",
    "q": "What sequence is produced by `list(range(0, 10, 1))`?",
    "opts": [
      "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
      "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      "[0]",
      "[]"
    ],
    "ans": 0,
    "exp": "`range(0, 10, 1)` produces [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]."
  },
  {
    "id": "py_loo_b_0100",
    "topic": "loops",
    "level": "basic",
    "q": "What sequence is produced by `list(range(1, 10, 2))`?",
    "opts": [
      "[1, 3, 5, 7, 9]",
      "[1, 3, 5, 7, 9, 10]",
      "[1]",
      "[]"
    ],
    "ans": 0,
    "exp": "`range(1, 10, 2)` produces [1, 3, 5, 7, 9]."
  },
  {
    "id": "py_loo_b_0101",
    "topic": "loops",
    "level": "basic",
    "q": "What sequence is produced by `list(range(10, 0, -2))`?",
    "opts": [
      "[10, 8, 6, 4, 2]",
      "[10, 8, 6, 4, 2, 0]",
      "[10]",
      "[]"
    ],
    "ans": 0,
    "exp": "`range(10, 0, -2)` produces [10, 8, 6, 4, 2]."
  },
  {
    "id": "py_loo_b_0102",
    "topic": "loops",
    "level": "basic",
    "q": "What sequence is produced by `list(range(5, 25, 5))`?",
    "opts": [
      "[5, 10, 15, 20]",
      "[5, 10, 15, 20, 25]",
      "[5]",
      "[]"
    ],
    "ans": 0,
    "exp": "`range(5, 25, 5)` produces [5, 10, 15, 20]."
  },
  {
    "id": "py_loo_b_0103",
    "topic": "loops",
    "level": "basic",
    "q": "What sequence is produced by `list(range(100, 70, -10))`?",
    "opts": [
      "[100, 90, 80]",
      "[100, 90, 80, 70]",
      "[100]",
      "[]"
    ],
    "ans": 0,
    "exp": "`range(100, 70, -10)` produces [100, 90, 80]."
  },
  {
    "id": "py_loo_a_0104",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of `for i in range(5): if i == 3: break else: print('Done')`?",
    "opts": [
      "Nothing is printed",
      "'Done' is printed",
      "0 1 2 3 printed",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Because `break` is executed when `i == 3`, the loop `else` block is skipped and nothing is printed."
  },
  {
    "id": "py_loo_a_0105",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of `[i*j for i in range(1, 3) for j in range(1, 3)]`?",
    "opts": [
      "[1, 2, 2, 4]",
      "[1, 4]",
      "[1, 2, 3, 4]",
      "[[1, 2], [2, 4]]"
    ],
    "ans": 0,
    "exp": "Nested list comprehension expands to: i=1 (j=1->1, j=2->2), i=2 (j=1->2, j=2->4)."
  },
  {
    "id": "py_loo_a_0106",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of `i = 1; while i < 10: i *= 2; print(i)`?",
    "opts": [
      "16",
      "8",
      "10",
      "32"
    ],
    "ans": 0,
    "exp": "Iterations: i becomes 2, 4, 8, 16. Loop terminates when `i < 10` is False, leaving `i = 16`."
  },
  {
    "id": "py_loo_a_0107",
    "topic": "loops",
    "level": "advance",
    "q": "What does `zip(*[(1, 'a'), (2, 'b'), (3, 'c')])` do?",
    "opts": [
      "Unzips the list of tuples into [(1, 2, 3), ('a', 'b', 'c')]",
      "Flattens the list",
      "Raises TypeError",
      "Creates dictionary"
    ],
    "ans": 0,
    "exp": "`zip(*iter)` transposes/unzips rows into columns."
  },
  {
    "id": "py_loo_a_0108",
    "topic": "loops",
    "level": "advance",
    "q": "What is the result of `sum(x for x in range(10) if x % 2 != 0)`?",
    "opts": [
      "25",
      "20",
      "30",
      "45"
    ],
    "ans": 0,
    "exp": "Odd numbers below 10 are 1, 3, 5, 7, 9. Their sum is 1+3+5+7+9 = 25."
  },
  {
    "id": "py_mod_b_0109",
    "topic": "module",
    "level": "basic",
    "q": "Which keyword is used to load an external Python module into a script?",
    "opts": [
      "load",
      "import",
      "include",
      "require"
    ],
    "ans": 1,
    "exp": "`import` is used to load modules in Python."
  },
  {
    "id": "py_mod_b_0110",
    "topic": "module",
    "level": "basic",
    "q": "Which built-in module provides mathematical functions like `sqrt()`, `ceil()`, and `sin()`?",
    "opts": [
      "math",
      "calc",
      "numeric",
      "sys"
    ],
    "ans": 0,
    "exp": "The `math` module provides standard mathematical functions."
  },
  {
    "id": "py_mod_b_0111",
    "topic": "module",
    "level": "basic",
    "q": "Which function in the `random` module returns a random integer within a range `[a, b]` inclusive?",
    "opts": [
      "random.randint(a, b)",
      "random.random(a, b)",
      "random.choice(a, b)",
      "random.range(a, b)"
    ],
    "ans": 0,
    "exp": "`random.randint(a, b)` returns a random integer N such that `a <= N <= b`."
  },
  {
    "id": "py_mod_b_0112",
    "topic": "module",
    "level": "basic",
    "q": "Which standard module provides access to command-line arguments via `argv`?",
    "opts": [
      "os",
      "sys",
      "system",
      "path"
    ],
    "ans": 1,
    "exp": "`sys.argv` stores command-line arguments in Python."
  },
  {
    "id": "py_mod_b_0113",
    "topic": "module",
    "level": "basic",
    "q": "What does `import math as m` do?",
    "opts": [
      "Imports math and renames it m as an alias",
      "Imports only function m",
      "Creates a new math module",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`as m` creates an alias `m` for the imported module."
  },
  {
    "id": "py_mod_b_0114",
    "topic": "module",
    "level": "basic",
    "q": "Which module function generates current date and time in Python?",
    "opts": [
      "datetime.datetime.now()",
      "time.clock()",
      "date.current()",
      "sys.time()"
    ],
    "ans": 0,
    "exp": "`datetime.datetime.now()` returns the current local date and time."
  },
  {
    "id": "py_mod_b_0115",
    "topic": "module",
    "level": "basic",
    "q": "What is the purpose of `if __name__ == '__main__':` in a Python module?",
    "opts": [
      "Executes code only when the script is run directly, not imported",
      "Defines the main class",
      "Imports main dependencies",
      "Compiles module"
    ],
    "ans": 0,
    "exp": "`__name__` equals `'__main__'` only when the file is executed directly."
  },
  {
    "id": "py_mod_b_0116",
    "topic": "module",
    "level": "basic",
    "q": "Which function in `os.path` joins path components intelligently?",
    "opts": [
      "os.path.join()",
      "os.path.concat()",
      "os.path.append()",
      "os.path.merge()"
    ],
    "ans": 0,
    "exp": "`os.path.join()` joins path components using the operating system's directory separator."
  },
  {
    "id": "py_mod_b_0117",
    "topic": "module",
    "level": "basic",
    "q": "Which module provides container data types like `Counter`, `defaultdict`, and `namedtuple`?",
    "opts": [
      "collections",
      "containers",
      "itertools",
      "functools"
    ],
    "ans": 0,
    "exp": "`collections` provides specialized container data types."
  },
  {
    "id": "py_mod_b_0118",
    "topic": "module",
    "level": "basic",
    "q": "Which module function returns a random element from a non-empty sequence?",
    "opts": [
      "random.choice()",
      "random.sample()",
      "random.pick()",
      "random.select()"
    ],
    "ans": 0,
    "exp": "`random.choice(seq)` returns a random element from `seq`."
  },
  {
    "id": "py_mod_b_0119",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of `math.sqrt(16)` in Python?",
    "opts": [
      "4.0",
      "Error",
      "None",
      "0"
    ],
    "ans": 0,
    "exp": "Square root of 16 is 4.0 (float)"
  },
  {
    "id": "py_mod_b_0120",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of `math.ceil(3.1)` in Python?",
    "opts": [
      "4",
      "Error",
      "None",
      "0"
    ],
    "ans": 0,
    "exp": "ceil() rounds up to nearest integer"
  },
  {
    "id": "py_mod_b_0121",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of `math.floor(3.9)` in Python?",
    "opts": [
      "3",
      "Error",
      "None",
      "0"
    ],
    "ans": 0,
    "exp": "floor() rounds down to nearest integer"
  },
  {
    "id": "py_mod_b_0122",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of `math.factorial(5)` in Python?",
    "opts": [
      "120",
      "Error",
      "None",
      "0"
    ],
    "ans": 0,
    "exp": "5! = 5 * 4 * 3 * 2 * 1 = 120"
  },
  {
    "id": "py_mod_b_0123",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of `math.gcd(12, 18)` in Python?",
    "opts": [
      "6",
      "Error",
      "None",
      "0"
    ],
    "ans": 0,
    "exp": "Greatest Common Divisor of 12 and 18 is 6"
  },
  {
    "id": "py_mod_b_0124",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of `math.pow(2, 3)` in Python?",
    "opts": [
      "8.0",
      "Error",
      "None",
      "0"
    ],
    "ans": 0,
    "exp": "pow(2, 3) returns 2**3 as float 8.0"
  },
  {
    "id": "py_mod_b_0125",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of `math.fabs(-5.5)` in Python?",
    "opts": [
      "5.5",
      "Error",
      "None",
      "0"
    ],
    "ans": 0,
    "exp": "fabs() returns absolute float value"
  },
  {
    "id": "py_mod_b_0126",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of `math.isclose(0.1 + 0.2, 0.3)` in Python?",
    "opts": [
      "True",
      "Error",
      "None",
      "0"
    ],
    "ans": 0,
    "exp": "isclose() checks floating-point tolerance"
  },
  {
    "id": "py_mod_a_0127",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of `from collections import Counter; c = Counter('abracadabra'); print(c['a'])`?",
    "opts": [
      "5",
      "4",
      "3",
      "KeyError"
    ],
    "ans": 0,
    "exp": "Character 'a' appears 5 times in 'abracadabra'."
  },
  {
    "id": "py_mod_a_0128",
    "topic": "module",
    "level": "advance",
    "q": "What does `functools.lru_cache(maxsize=128)` decorator do?",
    "opts": [
      "Caches function calls up to 128 results (Least Recently Used memoization)",
      "Limits execution time",
      "Restricts arguments",
      "Logs calls"
    ],
    "ans": 0,
    "exp": "`lru_cache` wraps a function with a memoizing callable that saves recent results."
  },
  {
    "id": "py_mod_a_0129",
    "topic": "module",
    "level": "advance",
    "q": "What is the behavior of `collections.defaultdict(list)` when accessing a missing key?",
    "opts": [
      "Automatically initializes missing key with an empty list `[]` without raising KeyError",
      "Raises KeyError",
      "Returns None",
      "Raises AttributeError"
    ],
    "ans": 0,
    "exp": "`defaultdict` calls its default factory (`list`) to provide default value for missing keys."
  },
  {
    "id": "py_mod_a_0130",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of `list(itertools.chain([1, 2], [3, 4]))`?",
    "opts": [
      "[1, 2, 3, 4]",
      "[[1, 2], [3, 4]]",
      "(1, 2, 3, 4)",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`itertools.chain` combines multiple iterables into a single sequence."
  },
  {
    "id": "py_mod_a_0131",
    "topic": "module",
    "level": "advance",
    "q": "What happens when importing a module twice in the same Python session?",
    "opts": [
      "Module is executed only once (cached in `sys.modules`)",
      "Module executes twice",
      "Raises ImportError",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Python caches imported modules in `sys.modules` so subsequent imports do not re-execute code."
  },
  {
    "id": "py_fun_b_0132",
    "topic": "functions",
    "level": "basic",
    "q": "Which keyword is used to define a custom function in Python?",
    "opts": [
      "function",
      "def",
      "func",
      "define"
    ],
    "ans": 1,
    "exp": "`def` is the keyword used to define functions in Python."
  },
  {
    "id": "py_fun_b_0133",
    "topic": "functions",
    "level": "basic",
    "q": "What does a function return by default if no explicit `return` statement is executed?",
    "opts": [
      "0",
      "None",
      "False",
      "Empty string"
    ],
    "ans": 1,
    "exp": "In Python, functions without an explicit return statement return `None`."
  },
  {
    "id": "py_fun_b_0134",
    "topic": "functions",
    "level": "basic",
    "q": "Which keyword is used to create anonymous inline single-expression functions in Python?",
    "opts": [
      "def",
      "lambda",
      "inline",
      "anonymous"
    ],
    "ans": 1,
    "exp": "`lambda` creates anonymous inline functions."
  },
  {
    "id": "py_fun_b_0135",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `(lambda x, y: x * y)(3, 4)`?",
    "opts": [
      "12",
      "7",
      "SyntaxError",
      "None"
    ],
    "ans": 0,
    "exp": "The lambda function multiplies 3 and 4, returning 12."
  },
  {
    "id": "py_fun_b_0136",
    "topic": "functions",
    "level": "basic",
    "q": "What does `*args` in a function parameter list allow?",
    "opts": [
      "Passing arbitrary number of positional arguments as a tuple",
      "Passing arbitrary keyword arguments as a dict",
      "Pointer reference",
      "Mandatory arguments"
    ],
    "ans": 0,
    "exp": "`*args` packs extra positional arguments into a tuple."
  },
  {
    "id": "py_fun_b_0137",
    "topic": "functions",
    "level": "basic",
    "q": "What does `**kwargs` in a function parameter list allow?",
    "opts": [
      "Passing arbitrary number of keyword arguments as a dictionary",
      "Passing positional tuple",
      "Keyword requirement",
      "Global variables"
    ],
    "ans": 0,
    "exp": "`**kwargs` packs extra keyword arguments into a dictionary."
  },
  {
    "id": "py_fun_b_0138",
    "topic": "functions",
    "level": "basic",
    "q": "What keyword allows modifying a global variable inside a local function scope?",
    "opts": [
      "global",
      "nonlocal",
      "outer",
      "export"
    ],
    "ans": 0,
    "exp": "`global` grants write access to a variable in global scope."
  },
  {
    "id": "py_fun_b_0139",
    "topic": "functions",
    "level": "basic",
    "q": "What keyword allows modifying a variable in an outer enclosing function scope?",
    "opts": [
      "nonlocal",
      "global",
      "outer",
      "parent"
    ],
    "ans": 0,
    "exp": "`nonlocal` allows modifying variables in nearest enclosing non-global scope."
  },
  {
    "id": "py_fun_b_0140",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def greet(name='User'): return f'Hello {name}'; greet()`?",
    "opts": [
      "'Hello User'",
      "TypeError",
      "'Hello name'",
      "None"
    ],
    "ans": 0,
    "exp": "When no argument is passed, default parameter `'User'` is used."
  },
  {
    "id": "py_fun_b_0141",
    "topic": "functions",
    "level": "basic",
    "q": "Which built-in function applies a function to every item of an iterable and returns an iterator?",
    "opts": [
      "map()",
      "filter()",
      "apply()",
      "reduce()"
    ],
    "ans": 0,
    "exp": "`map(func, iterable)` applies `func` to every item in the iterable."
  },
  {
    "id": "py_fun_b_0142",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=2): return x * y; print(calc(1))`?",
    "opts": [
      "2",
      "3",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(1)` uses default `y=2`, yielding `2`."
  },
  {
    "id": "py_fun_b_0143",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=3): return x * y; print(calc(1))`?",
    "opts": [
      "3",
      "4",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(1)` uses default `y=3`, yielding `3`."
  },
  {
    "id": "py_fun_b_0144",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=4): return x * y; print(calc(1))`?",
    "opts": [
      "4",
      "5",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(1)` uses default `y=4`, yielding `4`."
  },
  {
    "id": "py_fun_b_0145",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=2): return x * y; print(calc(2))`?",
    "opts": [
      "4",
      "4",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(2)` uses default `y=2`, yielding `4`."
  },
  {
    "id": "py_fun_b_0146",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=3): return x * y; print(calc(2))`?",
    "opts": [
      "6",
      "5",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(2)` uses default `y=3`, yielding `6`."
  },
  {
    "id": "py_fun_b_0147",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=4): return x * y; print(calc(2))`?",
    "opts": [
      "8",
      "6",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(2)` uses default `y=4`, yielding `8`."
  },
  {
    "id": "py_fun_b_0148",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=2): return x * y; print(calc(5))`?",
    "opts": [
      "10",
      "7",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(5)` uses default `y=2`, yielding `10`."
  },
  {
    "id": "py_fun_b_0149",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=3): return x * y; print(calc(5))`?",
    "opts": [
      "15",
      "8",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(5)` uses default `y=3`, yielding `15`."
  },
  {
    "id": "py_fun_b_0150",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=4): return x * y; print(calc(5))`?",
    "opts": [
      "20",
      "9",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(5)` uses default `y=4`, yielding `20`."
  },
  {
    "id": "py_fun_b_0151",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=2): return x * y; print(calc(10))`?",
    "opts": [
      "20",
      "12",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(10)` uses default `y=2`, yielding `20`."
  },
  {
    "id": "py_fun_b_0152",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=3): return x * y; print(calc(10))`?",
    "opts": [
      "30",
      "13",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(10)` uses default `y=3`, yielding `30`."
  },
  {
    "id": "py_fun_b_0153",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of `def calc(x, y=4): return x * y; print(calc(10))`?",
    "opts": [
      "40",
      "14",
      "TypeError",
      "None"
    ],
    "ans": 0,
    "exp": "`calc(10)` uses default `y=4`, yielding `40`."
  },
  {
    "id": "py_fun_a_0154",
    "topic": "functions",
    "level": "advance",
    "q": "What is the hazard of writing `def append_to(element, target=[]): target.append(element); return target`?",
    "opts": [
      "Default list `target` is instantiated ONCE and shared across all function calls",
      "Creates a new list every call",
      "Raises SyntaxError",
      "Raises AttributeError"
    ],
    "ans": 0,
    "exp": "Default parameter values are evaluated when the function definition is executed, creating a single shared mutable object."
  },
  {
    "id": "py_fun_a_0155",
    "topic": "functions",
    "level": "advance",
    "q": "What keyword turns a normal Python function into a Generator function?",
    "opts": [
      "yield",
      "generate",
      "return",
      "resume"
    ],
    "ans": 0,
    "exp": "Using `yield` inside a function makes it a generator function that yields items lazily."
  },
  {
    "id": "py_fun_a_0156",
    "topic": "functions",
    "level": "advance",
    "q": "What is the syntax for positional-only parameters in Python 3.8+?",
    "opts": [
      "def func(a, b, /, c, d): pass",
      "def func(a, b, *, c, d): pass",
      "def func(pos: a, b): pass",
      "def func(@a, @b): pass"
    ],
    "ans": 0,
    "exp": "Parameters before `/` are positional-only and cannot be passed as keyword arguments."
  },
  {
    "id": "py_fun_a_0157",
    "topic": "functions",
    "level": "advance",
    "q": "What is the syntax for keyword-only parameters in Python?",
    "opts": [
      "def func(a, b, *, c, d): pass",
      "def func(a, b, /, c, d): pass",
      "def func(key: c, d): pass",
      "def func(&c, &d): pass"
    ],
    "ans": 0,
    "exp": "Parameters after `*` are keyword-only and must be passed with argument names."
  },
  {
    "id": "py_fun_a_0158",
    "topic": "functions",
    "level": "advance",
    "q": "What is a Decorator function in Python?",
    "opts": [
      "A function that takes another function as argument and extends/modifies its behavior",
      "A decorative UI component",
      "A class destructor",
      "A syntax error"
    ],
    "ans": 0,
    "exp": "Decorators wrap functions to add functionality without permanently altering the code."
  },
  {
    "id": "py_ope_b_0159",
    "topic": "operators",
    "level": "basic",
    "q": "What is the result of `10 // 3` in Python?",
    "opts": [
      "3",
      "3.3333",
      "3.0",
      "1"
    ],
    "ans": 0,
    "exp": "`//` performs floor division, returning the integer quotient 3."
  },
  {
    "id": "py_ope_b_0160",
    "topic": "operators",
    "level": "basic",
    "q": "What is the result of `10 % 3` in Python?",
    "opts": [
      "1",
      "3",
      "0",
      "3.33"
    ],
    "ans": 0,
    "exp": "`%` returns the modulus (remainder of division), which is 1."
  },
  {
    "id": "py_ope_b_0161",
    "topic": "operators",
    "level": "basic",
    "q": "What is the result of `2 ** 3` in Python?",
    "opts": [
      "8",
      "6",
      "9",
      "5"
    ],
    "ans": 0,
    "exp": "`**` is the exponentiation operator: 2^3 = 8."
  },
  {
    "id": "py_ope_b_0162",
    "topic": "operators",
    "level": "basic",
    "q": "Which operator checks if two variables refer to the exact same object in memory?",
    "opts": [
      "is",
      "==",
      "equals",
      "in"
    ],
    "ans": 0,
    "exp": "`is` tests object identity (memory address equality)."
  },
  {
    "id": "py_ope_b_0163",
    "topic": "operators",
    "level": "basic",
    "q": "Which operator checks if a value exists within a sequence (like list, tuple, string, set)?",
    "opts": [
      "in",
      "has",
      "contains",
      "is"
    ],
    "ans": 0,
    "exp": "`in` is the membership operator."
  },
  {
    "id": "py_ope_b_0164",
    "topic": "operators",
    "level": "basic",
    "q": "What is the result of `not True`?",
    "opts": [
      "False",
      "True",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`not` negates a boolean value: `not True` is `False`."
  },
  {
    "id": "py_ope_b_0165",
    "topic": "operators",
    "level": "basic",
    "q": "What is the precedence order of arithmetic operators `+`, `*`, `**` from highest to lowest?",
    "opts": [
      "**, *, +",
      "*, **, +",
      "+, *, **",
      "**, +, *"
    ],
    "ans": 0,
    "exp": "`**` has highest precedence, followed by multiplication `*`, then addition `+`."
  },
  {
    "id": "py_ope_b_0166",
    "topic": "operators",
    "level": "basic",
    "q": "What is the result of `5 + 2 * 3`?",
    "opts": [
      "11",
      "21",
      "13",
      "16"
    ],
    "ans": 0,
    "exp": "Multiplication has higher precedence than addition: 2*3 = 6; 5+6 = 11."
  },
  {
    "id": "py_ope_b_0167",
    "topic": "operators",
    "level": "basic",
    "q": "What is the result of `(5 + 2) * 3`?",
    "opts": [
      "21",
      "11",
      "13",
      "16"
    ],
    "ans": 0,
    "exp": "Parentheses override standard precedence: (5+2) = 7; 7*3 = 21."
  },
  {
    "id": "py_ope_b_0168",
    "topic": "operators",
    "level": "basic",
    "q": "What does the augmented assignment operator `x += 5` equivalent to?",
    "opts": [
      "x = x + 5",
      "x + 5",
      "x = 5",
      "x == 5"
    ],
    "ans": 0,
    "exp": "`x += 5` adds 5 to `x` and reassigns the result back to `x`."
  },
  {
    "id": "py_ope_b_0169",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of bitwise expression `5 & 3` in Python?",
    "opts": [
      "1",
      "0",
      "15",
      "TypeError"
    ],
    "ans": 0,
    "exp": "5 (101) AND 3 (011) = 1 (001)"
  },
  {
    "id": "py_ope_b_0170",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of bitwise expression `5 | 3` in Python?",
    "opts": [
      "7",
      "0",
      "15",
      "TypeError"
    ],
    "ans": 0,
    "exp": "5 (101) OR 3 (011) = 7 (111)"
  },
  {
    "id": "py_ope_b_0171",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of bitwise expression `5 ^ 3` in Python?",
    "opts": [
      "6",
      "0",
      "15",
      "TypeError"
    ],
    "ans": 0,
    "exp": "5 (101) XOR 3 (011) = 6 (110)"
  },
  {
    "id": "py_ope_b_0172",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of bitwise expression `~5` in Python?",
    "opts": [
      "-6",
      "0",
      "15",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Bitwise NOT ~x is equal to -(x + 1)"
  },
  {
    "id": "py_ope_b_0173",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of bitwise expression `2 << 2` in Python?",
    "opts": [
      "8",
      "0",
      "15",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Left shift 2 by 2 bits multiplies by 2^2 = 8"
  },
  {
    "id": "py_ope_b_0174",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of bitwise expression `8 >> 2` in Python?",
    "opts": [
      "2",
      "0",
      "15",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Right shift 8 by 2 bits divides by 2^2 = 2"
  },
  {
    "id": "py_ope_a_0175",
    "topic": "operators",
    "level": "advance",
    "q": "What is the formal name of the `:=` operator introduced in Python 3.8?",
    "opts": [
      "Walrus operator (Assignment Expression)",
      "Penguin operator",
      "Colon assignment",
      "Pointer operator"
    ],
    "ans": 0,
    "exp": "`:=` is known as the Walrus operator and allows assignment inside expressions."
  },
  {
    "id": "py_ope_a_0176",
    "topic": "operators",
    "level": "advance",
    "q": "What is the result of `[] == []` vs `[] is []` in Python?",
    "opts": [
      "True and False",
      "True and True",
      "False and False",
      "False and True"
    ],
    "ans": 0,
    "exp": "`[] == []` compares values (both empty, True), while `[] is []` compares identity (two distinct list instances in memory, False)."
  },
  {
    "id": "py_ope_a_0177",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of `256 is 256` vs `257 is 257` in standard CPython REPL?",
    "opts": [
      "True and False (due to small integer caching [-5 to 256])",
      "True and True",
      "False and False",
      "Depends on variable names"
    ],
    "ans": 0,
    "exp": "CPython caches small integers in the range [-5, 256], so 256 refers to a single singleton object while 257 creates separate instances in interactive REPL."
  },
  {
    "id": "py_ope_a_0178",
    "topic": "operators",
    "level": "advance",
    "q": "What is the result of `True + True + False` in Python?",
    "opts": [
      "2",
      "True",
      "SyntaxError",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`bool` is a subclass of `int` in Python, where `True == 1` and `False == 0`. So 1 + 1 + 0 = 2."
  },
  {
    "id": "py_ope_a_0179",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of `not(3 > 2 or 5 < 1 and 4 == 4)`?",
    "opts": [
      "False",
      "True",
      "SyntaxError",
      "None"
    ],
    "ans": 0,
    "exp": "`and` has higher precedence than `or`: `5 < 1 and 4 == 4` is False. `3 > 2 or False` is True. `not(True)` is False."
  },
  {
    "id": "py_dat_b_0180",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1)?\nx = [0, 1, 2]; print(x[0])",
    "opts": [
      "0",
      "5",
      "-1",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[0, 1, 2]` is `0`."
  },
  {
    "id": "py_con_b_0181",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #2)?\na = 1; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0182",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #3)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0183",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #4)?\nimport math\nprint(math.floor(3 + 0.7))",
    "opts": [
      "3",
      "4",
      "4",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(3.7)` rounds down to `3`."
  },
  {
    "id": "py_fun_b_0184",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #5)?\ndef add_num(a, b=4):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "9",
      "4",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=4`, returning 5 + 4 = `9`."
  },
  {
    "id": "py_ope_b_0185",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #6)?\na = 15; b = 3; print(a % b)",
    "opts": [
      "0",
      "5",
      "15",
      "0"
    ],
    "ans": 0,
    "exp": "15 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0186",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #7)?\ns = 'python_programming_6'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "6",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '6'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0187",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #8)?\nx = 7; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "C",
      "A",
      "D",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 7` evaluates to `C`."
  },
  {
    "id": "py_loo_i_0188",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #9)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0189",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #10)?\nimport math\nprint(math.ceil(9 + 0.1))",
    "opts": [
      "10",
      "9",
      "9",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(9.1)` rounds up to `10`."
  },
  {
    "id": "py_fun_i_0190",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #11)?\nsq = lambda x: x ** 2 + 10\nprint(sq(3))",
    "opts": [
      "19",
      "9",
      "16",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 10 = 9 + 10 = `19`."
  },
  {
    "id": "py_ope_i_0191",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #12)?\nx = 11; print(x << 1)",
    "opts": [
      "22",
      "5",
      "44",
      "0"
    ],
    "ans": 0,
    "exp": "`11 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`22`)."
  },
  {
    "id": "py_dat_a_0192",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #13)?\nd = {'a': 12}; d.update({'a': 22, 'b': 32}); print(d['a'])",
    "opts": [
      "22",
      "12",
      "32",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `22`."
  },
  {
    "id": "py_con_a_0193",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #14)?\nval = 1; res = 'Yes' if (val and 13) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0194",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #15)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0195",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #16)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0196",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #17)?\ndef outer(x):\n    def inner(y):\n        return x * y + 16\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "24",
      "22",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 16 = `24`."
  },
  {
    "id": "py_ope_a_0197",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #18)?\na = 17; b = 22; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(17 < 22)` and `(22 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0198",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #19)?\nx = [36, 37, 38]; print(x[0])",
    "opts": [
      "36",
      "41",
      "35",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[36, 37, 38]` is `36`."
  },
  {
    "id": "py_con_b_0199",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #20)?\na = 19; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "19 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0200",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #21)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0201",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #22)?\nimport math\nprint(math.floor(21 + 0.7))",
    "opts": [
      "21",
      "22",
      "22",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(21.7)` rounds down to `21`."
  },
  {
    "id": "py_fun_b_0202",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #23)?\ndef add_num(a, b=22):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "27",
      "22",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=22`, returning 5 + 22 = `27`."
  },
  {
    "id": "py_ope_b_0203",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #24)?\na = 33; b = 3; print(a % b)",
    "opts": [
      "0",
      "11",
      "33",
      "0"
    ],
    "ans": 0,
    "exp": "33 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0204",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #25)?\ns = 'python_programming_24'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "24",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '24'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0205",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #26)?\nx = 25; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "C",
      "A",
      "D",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 25` evaluates to `C`."
  },
  {
    "id": "py_loo_i_0206",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #27)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0207",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #28)?\nimport math\nprint(math.ceil(27 + 0.1))",
    "opts": [
      "28",
      "27",
      "27",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(27.1)` rounds up to `28`."
  },
  {
    "id": "py_fun_i_0208",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #29)?\nsq = lambda x: x ** 2 + 28\nprint(sq(3))",
    "opts": [
      "37",
      "9",
      "34",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 28 = 9 + 28 = `37`."
  },
  {
    "id": "py_ope_i_0209",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #30)?\nx = 29; print(x << 1)",
    "opts": [
      "58",
      "14",
      "116",
      "0"
    ],
    "ans": 0,
    "exp": "`29 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`58`)."
  },
  {
    "id": "py_dat_a_0210",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #31)?\nd = {'a': 30}; d.update({'a': 40, 'b': 50}); print(d['a'])",
    "opts": [
      "40",
      "30",
      "50",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `40`."
  },
  {
    "id": "py_con_a_0211",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #32)?\nval = 1; res = 'Yes' if (val and 31) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0212",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #33)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0213",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #34)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0214",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #35)?\ndef outer(x):\n    def inner(y):\n        return x * y + 34\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "42",
      "40",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 34 = `42`."
  },
  {
    "id": "py_ope_a_0215",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #36)?\na = 35; b = 40; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(35 < 40)` and `(40 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0216",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #37)?\nx = [72, 73, 74]; print(x[0])",
    "opts": [
      "72",
      "77",
      "71",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[72, 73, 74]` is `72`."
  },
  {
    "id": "py_con_b_0217",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #38)?\na = 37; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "37 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0218",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #39)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0219",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #40)?\nimport math\nprint(math.floor(39 + 0.7))",
    "opts": [
      "39",
      "40",
      "40",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(39.7)` rounds down to `39`."
  },
  {
    "id": "py_fun_b_0220",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #41)?\ndef add_num(a, b=40):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "45",
      "40",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=40`, returning 5 + 40 = `45`."
  },
  {
    "id": "py_ope_b_0221",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #42)?\na = 51; b = 3; print(a % b)",
    "opts": [
      "0",
      "17",
      "51",
      "0"
    ],
    "ans": 0,
    "exp": "51 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0222",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #43)?\ns = 'python_programming_42'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "42",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '42'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0223",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #44)?\nx = 43; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "C",
      "A",
      "D",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 43` evaluates to `C`."
  },
  {
    "id": "py_loo_i_0224",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #45)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0225",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #46)?\nimport math\nprint(math.ceil(45 + 0.1))",
    "opts": [
      "46",
      "45",
      "45",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(45.1)` rounds up to `46`."
  },
  {
    "id": "py_fun_i_0226",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #47)?\nsq = lambda x: x ** 2 + 46\nprint(sq(3))",
    "opts": [
      "55",
      "9",
      "52",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 46 = 9 + 46 = `55`."
  },
  {
    "id": "py_ope_i_0227",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #48)?\nx = 47; print(x << 1)",
    "opts": [
      "94",
      "23",
      "188",
      "0"
    ],
    "ans": 0,
    "exp": "`47 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`94`)."
  },
  {
    "id": "py_dat_a_0228",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #49)?\nd = {'a': 48}; d.update({'a': 58, 'b': 68}); print(d['a'])",
    "opts": [
      "58",
      "48",
      "68",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `58`."
  },
  {
    "id": "py_con_a_0229",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #50)?\nval = 1; res = 'Yes' if (val and 49) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0230",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #51)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0231",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #52)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0232",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #53)?\ndef outer(x):\n    def inner(y):\n        return x * y + 52\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "60",
      "58",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 52 = `60`."
  },
  {
    "id": "py_ope_a_0233",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #54)?\na = 53; b = 58; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(53 < 58)` and `(58 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0234",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #55)?\nx = [108, 109, 110]; print(x[0])",
    "opts": [
      "108",
      "113",
      "107",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[108, 109, 110]` is `108`."
  },
  {
    "id": "py_con_b_0235",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #56)?\na = 55; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "55 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0236",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #57)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0237",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #58)?\nimport math\nprint(math.floor(57 + 0.7))",
    "opts": [
      "57",
      "58",
      "58",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(57.7)` rounds down to `57`."
  },
  {
    "id": "py_fun_b_0238",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #59)?\ndef add_num(a, b=58):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "63",
      "58",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=58`, returning 5 + 58 = `63`."
  },
  {
    "id": "py_ope_b_0239",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #60)?\na = 69; b = 3; print(a % b)",
    "opts": [
      "0",
      "23",
      "69",
      "0"
    ],
    "ans": 0,
    "exp": "69 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0240",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #61)?\ns = 'python_programming_60'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "60",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '60'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0241",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #62)?\nx = 61; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "B",
      "A",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 61` evaluates to `B`."
  },
  {
    "id": "py_loo_i_0242",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #63)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0243",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #64)?\nimport math\nprint(math.ceil(63 + 0.1))",
    "opts": [
      "64",
      "63",
      "63",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(63.1)` rounds up to `64`."
  },
  {
    "id": "py_fun_i_0244",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #65)?\nsq = lambda x: x ** 2 + 64\nprint(sq(3))",
    "opts": [
      "73",
      "9",
      "70",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 64 = 9 + 64 = `73`."
  },
  {
    "id": "py_ope_i_0245",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #66)?\nx = 65; print(x << 1)",
    "opts": [
      "130",
      "32",
      "260",
      "0"
    ],
    "ans": 0,
    "exp": "`65 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`130`)."
  },
  {
    "id": "py_dat_a_0246",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #67)?\nd = {'a': 66}; d.update({'a': 76, 'b': 86}); print(d['a'])",
    "opts": [
      "76",
      "66",
      "86",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `76`."
  },
  {
    "id": "py_con_a_0247",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #68)?\nval = 1; res = 'Yes' if (val and 67) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0248",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #69)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0249",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #70)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0250",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #71)?\ndef outer(x):\n    def inner(y):\n        return x * y + 70\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "78",
      "76",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 70 = `78`."
  },
  {
    "id": "py_ope_a_0251",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #72)?\na = 71; b = 76; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(71 < 76)` and `(76 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0252",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #73)?\nx = [144, 145, 146]; print(x[0])",
    "opts": [
      "144",
      "149",
      "143",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[144, 145, 146]` is `144`."
  },
  {
    "id": "py_con_b_0253",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #74)?\na = 73; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "73 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0254",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #75)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0255",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #76)?\nimport math\nprint(math.floor(75 + 0.7))",
    "opts": [
      "75",
      "76",
      "76",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(75.7)` rounds down to `75`."
  },
  {
    "id": "py_fun_b_0256",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #77)?\ndef add_num(a, b=76):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "81",
      "76",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=76`, returning 5 + 76 = `81`."
  },
  {
    "id": "py_ope_b_0257",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #78)?\na = 87; b = 3; print(a % b)",
    "opts": [
      "0",
      "29",
      "87",
      "0"
    ],
    "ans": 0,
    "exp": "87 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0258",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #79)?\ns = 'python_programming_78'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "78",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '78'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0259",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #80)?\nx = 79; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "B",
      "A",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 79` evaluates to `B`."
  },
  {
    "id": "py_loo_i_0260",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #81)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0261",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #82)?\nimport math\nprint(math.ceil(81 + 0.1))",
    "opts": [
      "82",
      "81",
      "81",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(81.1)` rounds up to `82`."
  },
  {
    "id": "py_fun_i_0262",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #83)?\nsq = lambda x: x ** 2 + 82\nprint(sq(3))",
    "opts": [
      "91",
      "9",
      "88",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 82 = 9 + 82 = `91`."
  },
  {
    "id": "py_ope_i_0263",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #84)?\nx = 83; print(x << 1)",
    "opts": [
      "166",
      "41",
      "332",
      "0"
    ],
    "ans": 0,
    "exp": "`83 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`166`)."
  },
  {
    "id": "py_dat_a_0264",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #85)?\nd = {'a': 84}; d.update({'a': 94, 'b': 104}); print(d['a'])",
    "opts": [
      "94",
      "84",
      "104",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `94`."
  },
  {
    "id": "py_con_a_0265",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #86)?\nval = 1; res = 'Yes' if (val and 85) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0266",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #87)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0267",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #88)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0268",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #89)?\ndef outer(x):\n    def inner(y):\n        return x * y + 88\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "96",
      "94",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 88 = `96`."
  },
  {
    "id": "py_ope_a_0269",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #90)?\na = 89; b = 94; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(89 < 94)` and `(94 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0270",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #91)?\nx = [180, 181, 182]; print(x[0])",
    "opts": [
      "180",
      "185",
      "179",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[180, 181, 182]` is `180`."
  },
  {
    "id": "py_con_b_0271",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #92)?\na = 91; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "91 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0272",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #93)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0273",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #94)?\nimport math\nprint(math.floor(93 + 0.7))",
    "opts": [
      "93",
      "94",
      "94",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(93.7)` rounds down to `93`."
  },
  {
    "id": "py_fun_b_0274",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #95)?\ndef add_num(a, b=94):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "99",
      "94",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=94`, returning 5 + 94 = `99`."
  },
  {
    "id": "py_ope_b_0275",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #96)?\na = 105; b = 3; print(a % b)",
    "opts": [
      "0",
      "35",
      "105",
      "0"
    ],
    "ans": 0,
    "exp": "105 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0276",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #97)?\ns = 'python_programming_96'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "96",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '96'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0277",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #98)?\nx = 97; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "B",
      "A",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 97` evaluates to `B`."
  },
  {
    "id": "py_loo_i_0278",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #99)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0279",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #100)?\nimport math\nprint(math.ceil(99 + 0.1))",
    "opts": [
      "100",
      "99",
      "99",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(99.1)` rounds up to `100`."
  },
  {
    "id": "py_fun_i_0280",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #101)?\nsq = lambda x: x ** 2 + 100\nprint(sq(3))",
    "opts": [
      "109",
      "9",
      "106",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 100 = 9 + 100 = `109`."
  },
  {
    "id": "py_ope_i_0281",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #102)?\nx = 101; print(x << 1)",
    "opts": [
      "202",
      "50",
      "404",
      "0"
    ],
    "ans": 0,
    "exp": "`101 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`202`)."
  },
  {
    "id": "py_dat_a_0282",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #103)?\nd = {'a': 102}; d.update({'a': 112, 'b': 122}); print(d['a'])",
    "opts": [
      "112",
      "102",
      "122",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `112`."
  },
  {
    "id": "py_con_a_0283",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #104)?\nval = 1; res = 'Yes' if (val and 103) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0284",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #105)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0285",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #106)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0286",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #107)?\ndef outer(x):\n    def inner(y):\n        return x * y + 106\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "114",
      "112",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 106 = `114`."
  },
  {
    "id": "py_ope_a_0287",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #108)?\na = 107; b = 112; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(107 < 112)` and `(112 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0288",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #109)?\nx = [216, 217, 218]; print(x[0])",
    "opts": [
      "216",
      "221",
      "215",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[216, 217, 218]` is `216`."
  },
  {
    "id": "py_con_b_0289",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #110)?\na = 109; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "109 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0290",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #111)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0291",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #112)?\nimport math\nprint(math.floor(111 + 0.7))",
    "opts": [
      "111",
      "112",
      "112",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(111.7)` rounds down to `111`."
  },
  {
    "id": "py_fun_b_0292",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #113)?\ndef add_num(a, b=112):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "117",
      "112",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=112`, returning 5 + 112 = `117`."
  },
  {
    "id": "py_ope_b_0293",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #114)?\na = 123; b = 3; print(a % b)",
    "opts": [
      "0",
      "41",
      "123",
      "0"
    ],
    "ans": 0,
    "exp": "123 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0294",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #115)?\ns = 'python_programming_114'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "114",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '114'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0295",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #116)?\nx = 115; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 115` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0296",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #117)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0297",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #118)?\nimport math\nprint(math.ceil(117 + 0.1))",
    "opts": [
      "118",
      "117",
      "117",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(117.1)` rounds up to `118`."
  },
  {
    "id": "py_fun_i_0298",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #119)?\nsq = lambda x: x ** 2 + 118\nprint(sq(3))",
    "opts": [
      "127",
      "9",
      "124",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 118 = 9 + 118 = `127`."
  },
  {
    "id": "py_ope_i_0299",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #120)?\nx = 119; print(x << 1)",
    "opts": [
      "238",
      "59",
      "476",
      "0"
    ],
    "ans": 0,
    "exp": "`119 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`238`)."
  },
  {
    "id": "py_dat_a_0300",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #121)?\nd = {'a': 120}; d.update({'a': 130, 'b': 140}); print(d['a'])",
    "opts": [
      "130",
      "120",
      "140",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `130`."
  },
  {
    "id": "py_con_a_0301",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #122)?\nval = 1; res = 'Yes' if (val and 121) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0302",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #123)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0303",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #124)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0304",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #125)?\ndef outer(x):\n    def inner(y):\n        return x * y + 124\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "132",
      "130",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 124 = `132`."
  },
  {
    "id": "py_ope_a_0305",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #126)?\na = 125; b = 130; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(125 < 130)` and `(130 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0306",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #127)?\nx = [252, 253, 254]; print(x[0])",
    "opts": [
      "252",
      "257",
      "251",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[252, 253, 254]` is `252`."
  },
  {
    "id": "py_con_b_0307",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #128)?\na = 127; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "127 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0308",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #129)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0309",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #130)?\nimport math\nprint(math.floor(129 + 0.7))",
    "opts": [
      "129",
      "130",
      "130",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(129.7)` rounds down to `129`."
  },
  {
    "id": "py_fun_b_0310",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #131)?\ndef add_num(a, b=130):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "135",
      "130",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=130`, returning 5 + 130 = `135`."
  },
  {
    "id": "py_ope_b_0311",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #132)?\na = 141; b = 3; print(a % b)",
    "opts": [
      "0",
      "47",
      "141",
      "0"
    ],
    "ans": 0,
    "exp": "141 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0312",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #133)?\ns = 'python_programming_132'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "132",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '132'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0313",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #134)?\nx = 133; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 133` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0314",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #135)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0315",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #136)?\nimport math\nprint(math.ceil(135 + 0.1))",
    "opts": [
      "136",
      "135",
      "135",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(135.1)` rounds up to `136`."
  },
  {
    "id": "py_fun_i_0316",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #137)?\nsq = lambda x: x ** 2 + 136\nprint(sq(3))",
    "opts": [
      "145",
      "9",
      "142",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 136 = 9 + 136 = `145`."
  },
  {
    "id": "py_ope_i_0317",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #138)?\nx = 137; print(x << 1)",
    "opts": [
      "274",
      "68",
      "548",
      "0"
    ],
    "ans": 0,
    "exp": "`137 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`274`)."
  },
  {
    "id": "py_dat_a_0318",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #139)?\nd = {'a': 138}; d.update({'a': 148, 'b': 158}); print(d['a'])",
    "opts": [
      "148",
      "138",
      "158",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `148`."
  },
  {
    "id": "py_con_a_0319",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #140)?\nval = 1; res = 'Yes' if (val and 139) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0320",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #141)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0321",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #142)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0322",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #143)?\ndef outer(x):\n    def inner(y):\n        return x * y + 142\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "150",
      "148",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 142 = `150`."
  },
  {
    "id": "py_ope_a_0323",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #144)?\na = 143; b = 148; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(143 < 148)` and `(148 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0324",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #145)?\nx = [288, 289, 290]; print(x[0])",
    "opts": [
      "288",
      "293",
      "287",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[288, 289, 290]` is `288`."
  },
  {
    "id": "py_con_b_0325",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #146)?\na = 145; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "145 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0326",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #147)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0327",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #148)?\nimport math\nprint(math.floor(147 + 0.7))",
    "opts": [
      "147",
      "148",
      "148",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(147.7)` rounds down to `147`."
  },
  {
    "id": "py_fun_b_0328",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #149)?\ndef add_num(a, b=148):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "153",
      "148",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=148`, returning 5 + 148 = `153`."
  },
  {
    "id": "py_ope_b_0329",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #150)?\na = 159; b = 3; print(a % b)",
    "opts": [
      "0",
      "53",
      "159",
      "0"
    ],
    "ans": 0,
    "exp": "159 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0330",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #151)?\ns = 'python_programming_150'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "150",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '150'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0331",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #152)?\nx = 151; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 151` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0332",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #153)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0333",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #154)?\nimport math\nprint(math.ceil(153 + 0.1))",
    "opts": [
      "154",
      "153",
      "153",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(153.1)` rounds up to `154`."
  },
  {
    "id": "py_fun_i_0334",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #155)?\nsq = lambda x: x ** 2 + 154\nprint(sq(3))",
    "opts": [
      "163",
      "9",
      "160",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 154 = 9 + 154 = `163`."
  },
  {
    "id": "py_ope_i_0335",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #156)?\nx = 155; print(x << 1)",
    "opts": [
      "310",
      "77",
      "620",
      "0"
    ],
    "ans": 0,
    "exp": "`155 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`310`)."
  },
  {
    "id": "py_dat_a_0336",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #157)?\nd = {'a': 156}; d.update({'a': 166, 'b': 176}); print(d['a'])",
    "opts": [
      "166",
      "156",
      "176",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `166`."
  },
  {
    "id": "py_con_a_0337",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #158)?\nval = 1; res = 'Yes' if (val and 157) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0338",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #159)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0339",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #160)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0340",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #161)?\ndef outer(x):\n    def inner(y):\n        return x * y + 160\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "168",
      "166",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 160 = `168`."
  },
  {
    "id": "py_ope_a_0341",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #162)?\na = 161; b = 166; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(161 < 166)` and `(166 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0342",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #163)?\nx = [324, 325, 326]; print(x[0])",
    "opts": [
      "324",
      "329",
      "323",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[324, 325, 326]` is `324`."
  },
  {
    "id": "py_con_b_0343",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #164)?\na = 163; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "163 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0344",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #165)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0345",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #166)?\nimport math\nprint(math.floor(165 + 0.7))",
    "opts": [
      "165",
      "166",
      "166",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(165.7)` rounds down to `165`."
  },
  {
    "id": "py_fun_b_0346",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #167)?\ndef add_num(a, b=166):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "171",
      "166",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=166`, returning 5 + 166 = `171`."
  },
  {
    "id": "py_ope_b_0347",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #168)?\na = 177; b = 3; print(a % b)",
    "opts": [
      "0",
      "59",
      "177",
      "0"
    ],
    "ans": 0,
    "exp": "177 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0348",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #169)?\ns = 'python_programming_168'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "168",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '168'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0349",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #170)?\nx = 169; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 169` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0350",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #171)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0351",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #172)?\nimport math\nprint(math.ceil(171 + 0.1))",
    "opts": [
      "172",
      "171",
      "171",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(171.1)` rounds up to `172`."
  },
  {
    "id": "py_fun_i_0352",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #173)?\nsq = lambda x: x ** 2 + 172\nprint(sq(3))",
    "opts": [
      "181",
      "9",
      "178",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 172 = 9 + 172 = `181`."
  },
  {
    "id": "py_ope_i_0353",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #174)?\nx = 173; print(x << 1)",
    "opts": [
      "346",
      "86",
      "692",
      "0"
    ],
    "ans": 0,
    "exp": "`173 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`346`)."
  },
  {
    "id": "py_dat_a_0354",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #175)?\nd = {'a': 174}; d.update({'a': 184, 'b': 194}); print(d['a'])",
    "opts": [
      "184",
      "174",
      "194",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `184`."
  },
  {
    "id": "py_con_a_0355",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #176)?\nval = 1; res = 'Yes' if (val and 175) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0356",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #177)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0357",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #178)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0358",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #179)?\ndef outer(x):\n    def inner(y):\n        return x * y + 178\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "186",
      "184",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 178 = `186`."
  },
  {
    "id": "py_ope_a_0359",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #180)?\na = 179; b = 184; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(179 < 184)` and `(184 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0360",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #181)?\nx = [360, 361, 362]; print(x[0])",
    "opts": [
      "360",
      "365",
      "359",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[360, 361, 362]` is `360`."
  },
  {
    "id": "py_con_b_0361",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #182)?\na = 181; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "181 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0362",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #183)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0363",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #184)?\nimport math\nprint(math.floor(183 + 0.7))",
    "opts": [
      "183",
      "184",
      "184",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(183.7)` rounds down to `183`."
  },
  {
    "id": "py_fun_b_0364",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #185)?\ndef add_num(a, b=184):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "189",
      "184",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=184`, returning 5 + 184 = `189`."
  },
  {
    "id": "py_ope_b_0365",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #186)?\na = 195; b = 3; print(a % b)",
    "opts": [
      "0",
      "65",
      "195",
      "0"
    ],
    "ans": 0,
    "exp": "195 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0366",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #187)?\ns = 'python_programming_186'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "186",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '186'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0367",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #188)?\nx = 187; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 187` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0368",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #189)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0369",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #190)?\nimport math\nprint(math.ceil(189 + 0.1))",
    "opts": [
      "190",
      "189",
      "189",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(189.1)` rounds up to `190`."
  },
  {
    "id": "py_fun_i_0370",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #191)?\nsq = lambda x: x ** 2 + 190\nprint(sq(3))",
    "opts": [
      "199",
      "9",
      "196",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 190 = 9 + 190 = `199`."
  },
  {
    "id": "py_ope_i_0371",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #192)?\nx = 191; print(x << 1)",
    "opts": [
      "382",
      "95",
      "764",
      "0"
    ],
    "ans": 0,
    "exp": "`191 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`382`)."
  },
  {
    "id": "py_dat_a_0372",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #193)?\nd = {'a': 192}; d.update({'a': 202, 'b': 212}); print(d['a'])",
    "opts": [
      "202",
      "192",
      "212",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `202`."
  },
  {
    "id": "py_con_a_0373",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #194)?\nval = 1; res = 'Yes' if (val and 193) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0374",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #195)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0375",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #196)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0376",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #197)?\ndef outer(x):\n    def inner(y):\n        return x * y + 196\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "204",
      "202",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 196 = `204`."
  },
  {
    "id": "py_ope_a_0377",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #198)?\na = 197; b = 202; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(197 < 202)` and `(202 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0378",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #199)?\nx = [396, 397, 398]; print(x[0])",
    "opts": [
      "396",
      "401",
      "395",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[396, 397, 398]` is `396`."
  },
  {
    "id": "py_con_b_0379",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #200)?\na = 199; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "199 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0380",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #201)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0381",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #202)?\nimport math\nprint(math.floor(201 + 0.7))",
    "opts": [
      "201",
      "202",
      "202",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(201.7)` rounds down to `201`."
  },
  {
    "id": "py_fun_b_0382",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #203)?\ndef add_num(a, b=202):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "207",
      "202",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=202`, returning 5 + 202 = `207`."
  },
  {
    "id": "py_ope_b_0383",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #204)?\na = 213; b = 3; print(a % b)",
    "opts": [
      "0",
      "71",
      "213",
      "0"
    ],
    "ans": 0,
    "exp": "213 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0384",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #205)?\ns = 'python_programming_204'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "204",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '204'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0385",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #206)?\nx = 205; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 205` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0386",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #207)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0387",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #208)?\nimport math\nprint(math.ceil(207 + 0.1))",
    "opts": [
      "208",
      "207",
      "207",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(207.1)` rounds up to `208`."
  },
  {
    "id": "py_fun_i_0388",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #209)?\nsq = lambda x: x ** 2 + 208\nprint(sq(3))",
    "opts": [
      "217",
      "9",
      "214",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 208 = 9 + 208 = `217`."
  },
  {
    "id": "py_ope_i_0389",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #210)?\nx = 209; print(x << 1)",
    "opts": [
      "418",
      "104",
      "836",
      "0"
    ],
    "ans": 0,
    "exp": "`209 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`418`)."
  },
  {
    "id": "py_dat_a_0390",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #211)?\nd = {'a': 210}; d.update({'a': 220, 'b': 230}); print(d['a'])",
    "opts": [
      "220",
      "210",
      "230",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `220`."
  },
  {
    "id": "py_con_a_0391",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #212)?\nval = 1; res = 'Yes' if (val and 211) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0392",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #213)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0393",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #214)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0394",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #215)?\ndef outer(x):\n    def inner(y):\n        return x * y + 214\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "222",
      "220",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 214 = `222`."
  },
  {
    "id": "py_ope_a_0395",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #216)?\na = 215; b = 220; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(215 < 220)` and `(220 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0396",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #217)?\nx = [432, 433, 434]; print(x[0])",
    "opts": [
      "432",
      "437",
      "431",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[432, 433, 434]` is `432`."
  },
  {
    "id": "py_con_b_0397",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #218)?\na = 217; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "217 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0398",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #219)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0399",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #220)?\nimport math\nprint(math.floor(219 + 0.7))",
    "opts": [
      "219",
      "220",
      "220",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(219.7)` rounds down to `219`."
  },
  {
    "id": "py_fun_b_0400",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #221)?\ndef add_num(a, b=220):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "225",
      "220",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=220`, returning 5 + 220 = `225`."
  },
  {
    "id": "py_ope_b_0401",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #222)?\na = 231; b = 3; print(a % b)",
    "opts": [
      "0",
      "77",
      "231",
      "0"
    ],
    "ans": 0,
    "exp": "231 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0402",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #223)?\ns = 'python_programming_222'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "222",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '222'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0403",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #224)?\nx = 223; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 223` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0404",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #225)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0405",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #226)?\nimport math\nprint(math.ceil(225 + 0.1))",
    "opts": [
      "226",
      "225",
      "225",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(225.1)` rounds up to `226`."
  },
  {
    "id": "py_fun_i_0406",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #227)?\nsq = lambda x: x ** 2 + 226\nprint(sq(3))",
    "opts": [
      "235",
      "9",
      "232",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 226 = 9 + 226 = `235`."
  },
  {
    "id": "py_ope_i_0407",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #228)?\nx = 227; print(x << 1)",
    "opts": [
      "454",
      "113",
      "908",
      "0"
    ],
    "ans": 0,
    "exp": "`227 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`454`)."
  },
  {
    "id": "py_dat_a_0408",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #229)?\nd = {'a': 228}; d.update({'a': 238, 'b': 248}); print(d['a'])",
    "opts": [
      "238",
      "228",
      "248",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `238`."
  },
  {
    "id": "py_con_a_0409",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #230)?\nval = 1; res = 'Yes' if (val and 229) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0410",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #231)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0411",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #232)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0412",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #233)?\ndef outer(x):\n    def inner(y):\n        return x * y + 232\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "240",
      "238",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 232 = `240`."
  },
  {
    "id": "py_ope_a_0413",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #234)?\na = 233; b = 238; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(233 < 238)` and `(238 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0414",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #235)?\nx = [468, 469, 470]; print(x[0])",
    "opts": [
      "468",
      "473",
      "467",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[468, 469, 470]` is `468`."
  },
  {
    "id": "py_con_b_0415",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #236)?\na = 235; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "235 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0416",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #237)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0417",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #238)?\nimport math\nprint(math.floor(237 + 0.7))",
    "opts": [
      "237",
      "238",
      "238",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(237.7)` rounds down to `237`."
  },
  {
    "id": "py_fun_b_0418",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #239)?\ndef add_num(a, b=238):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "243",
      "238",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=238`, returning 5 + 238 = `243`."
  },
  {
    "id": "py_ope_b_0419",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #240)?\na = 249; b = 3; print(a % b)",
    "opts": [
      "0",
      "83",
      "249",
      "0"
    ],
    "ans": 0,
    "exp": "249 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0420",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #241)?\ns = 'python_programming_240'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "240",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '240'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0421",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #242)?\nx = 241; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 241` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0422",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #243)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0423",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #244)?\nimport math\nprint(math.ceil(243 + 0.1))",
    "opts": [
      "244",
      "243",
      "243",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(243.1)` rounds up to `244`."
  },
  {
    "id": "py_fun_i_0424",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #245)?\nsq = lambda x: x ** 2 + 244\nprint(sq(3))",
    "opts": [
      "253",
      "9",
      "250",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 244 = 9 + 244 = `253`."
  },
  {
    "id": "py_ope_i_0425",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #246)?\nx = 245; print(x << 1)",
    "opts": [
      "490",
      "122",
      "980",
      "0"
    ],
    "ans": 0,
    "exp": "`245 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`490`)."
  },
  {
    "id": "py_dat_a_0426",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #247)?\nd = {'a': 246}; d.update({'a': 256, 'b': 266}); print(d['a'])",
    "opts": [
      "256",
      "246",
      "266",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `256`."
  },
  {
    "id": "py_con_a_0427",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #248)?\nval = 1; res = 'Yes' if (val and 247) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0428",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #249)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0429",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #250)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0430",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #251)?\ndef outer(x):\n    def inner(y):\n        return x * y + 250\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "258",
      "256",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 250 = `258`."
  },
  {
    "id": "py_ope_a_0431",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #252)?\na = 251; b = 256; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(251 < 256)` and `(256 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0432",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #253)?\nx = [504, 505, 506]; print(x[0])",
    "opts": [
      "504",
      "509",
      "503",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[504, 505, 506]` is `504`."
  },
  {
    "id": "py_con_b_0433",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #254)?\na = 253; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "253 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0434",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #255)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0435",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #256)?\nimport math\nprint(math.floor(255 + 0.7))",
    "opts": [
      "255",
      "256",
      "256",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(255.7)` rounds down to `255`."
  },
  {
    "id": "py_fun_b_0436",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #257)?\ndef add_num(a, b=256):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "261",
      "256",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=256`, returning 5 + 256 = `261`."
  },
  {
    "id": "py_ope_b_0437",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #258)?\na = 267; b = 3; print(a % b)",
    "opts": [
      "0",
      "89",
      "267",
      "0"
    ],
    "ans": 0,
    "exp": "267 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0438",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #259)?\ns = 'python_programming_258'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "258",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '258'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0439",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #260)?\nx = 259; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 259` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0440",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #261)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0441",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #262)?\nimport math\nprint(math.ceil(261 + 0.1))",
    "opts": [
      "262",
      "261",
      "261",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(261.1)` rounds up to `262`."
  },
  {
    "id": "py_fun_i_0442",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #263)?\nsq = lambda x: x ** 2 + 262\nprint(sq(3))",
    "opts": [
      "271",
      "9",
      "268",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 262 = 9 + 262 = `271`."
  },
  {
    "id": "py_ope_i_0443",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #264)?\nx = 263; print(x << 1)",
    "opts": [
      "526",
      "131",
      "1052",
      "0"
    ],
    "ans": 0,
    "exp": "`263 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`526`)."
  },
  {
    "id": "py_dat_a_0444",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #265)?\nd = {'a': 264}; d.update({'a': 274, 'b': 284}); print(d['a'])",
    "opts": [
      "274",
      "264",
      "284",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `274`."
  },
  {
    "id": "py_con_a_0445",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #266)?\nval = 1; res = 'Yes' if (val and 265) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0446",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #267)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0447",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #268)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0448",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #269)?\ndef outer(x):\n    def inner(y):\n        return x * y + 268\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "276",
      "274",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 268 = `276`."
  },
  {
    "id": "py_ope_a_0449",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #270)?\na = 269; b = 274; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(269 < 274)` and `(274 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0450",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #271)?\nx = [540, 541, 542]; print(x[0])",
    "opts": [
      "540",
      "545",
      "539",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[540, 541, 542]` is `540`."
  },
  {
    "id": "py_con_b_0451",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #272)?\na = 271; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "271 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0452",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #273)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0453",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #274)?\nimport math\nprint(math.floor(273 + 0.7))",
    "opts": [
      "273",
      "274",
      "274",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(273.7)` rounds down to `273`."
  },
  {
    "id": "py_fun_b_0454",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #275)?\ndef add_num(a, b=274):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "279",
      "274",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=274`, returning 5 + 274 = `279`."
  },
  {
    "id": "py_ope_b_0455",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #276)?\na = 285; b = 3; print(a % b)",
    "opts": [
      "0",
      "95",
      "285",
      "0"
    ],
    "ans": 0,
    "exp": "285 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0456",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #277)?\ns = 'python_programming_276'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "276",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '276'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0457",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #278)?\nx = 277; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 277` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0458",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #279)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0459",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #280)?\nimport math\nprint(math.ceil(279 + 0.1))",
    "opts": [
      "280",
      "279",
      "279",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(279.1)` rounds up to `280`."
  },
  {
    "id": "py_fun_i_0460",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #281)?\nsq = lambda x: x ** 2 + 280\nprint(sq(3))",
    "opts": [
      "289",
      "9",
      "286",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 280 = 9 + 280 = `289`."
  },
  {
    "id": "py_ope_i_0461",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #282)?\nx = 281; print(x << 1)",
    "opts": [
      "562",
      "140",
      "1124",
      "0"
    ],
    "ans": 0,
    "exp": "`281 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`562`)."
  },
  {
    "id": "py_dat_a_0462",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #283)?\nd = {'a': 282}; d.update({'a': 292, 'b': 302}); print(d['a'])",
    "opts": [
      "292",
      "282",
      "302",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `292`."
  },
  {
    "id": "py_con_a_0463",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #284)?\nval = 1; res = 'Yes' if (val and 283) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0464",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #285)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0465",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #286)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0466",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #287)?\ndef outer(x):\n    def inner(y):\n        return x * y + 286\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "294",
      "292",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 286 = `294`."
  },
  {
    "id": "py_ope_a_0467",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #288)?\na = 287; b = 292; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(287 < 292)` and `(292 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0468",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #289)?\nx = [576, 577, 578]; print(x[0])",
    "opts": [
      "576",
      "581",
      "575",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[576, 577, 578]` is `576`."
  },
  {
    "id": "py_con_b_0469",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #290)?\na = 289; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "289 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0470",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #291)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0471",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #292)?\nimport math\nprint(math.floor(291 + 0.7))",
    "opts": [
      "291",
      "292",
      "292",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(291.7)` rounds down to `291`."
  },
  {
    "id": "py_fun_b_0472",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #293)?\ndef add_num(a, b=292):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "297",
      "292",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=292`, returning 5 + 292 = `297`."
  },
  {
    "id": "py_ope_b_0473",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #294)?\na = 303; b = 3; print(a % b)",
    "opts": [
      "0",
      "101",
      "303",
      "0"
    ],
    "ans": 0,
    "exp": "303 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0474",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #295)?\ns = 'python_programming_294'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "294",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '294'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0475",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #296)?\nx = 295; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 295` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0476",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #297)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0477",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #298)?\nimport math\nprint(math.ceil(297 + 0.1))",
    "opts": [
      "298",
      "297",
      "297",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(297.1)` rounds up to `298`."
  },
  {
    "id": "py_fun_i_0478",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #299)?\nsq = lambda x: x ** 2 + 298\nprint(sq(3))",
    "opts": [
      "307",
      "9",
      "304",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 298 = 9 + 298 = `307`."
  },
  {
    "id": "py_ope_i_0479",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #300)?\nx = 299; print(x << 1)",
    "opts": [
      "598",
      "149",
      "1196",
      "0"
    ],
    "ans": 0,
    "exp": "`299 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`598`)."
  },
  {
    "id": "py_dat_a_0480",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #301)?\nd = {'a': 300}; d.update({'a': 310, 'b': 320}); print(d['a'])",
    "opts": [
      "310",
      "300",
      "320",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `310`."
  },
  {
    "id": "py_con_a_0481",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #302)?\nval = 1; res = 'Yes' if (val and 301) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0482",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #303)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0483",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #304)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0484",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #305)?\ndef outer(x):\n    def inner(y):\n        return x * y + 304\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "312",
      "310",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 304 = `312`."
  },
  {
    "id": "py_ope_a_0485",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #306)?\na = 305; b = 310; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(305 < 310)` and `(310 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0486",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #307)?\nx = [612, 613, 614]; print(x[0])",
    "opts": [
      "612",
      "617",
      "611",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[612, 613, 614]` is `612`."
  },
  {
    "id": "py_con_b_0487",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #308)?\na = 307; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "307 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0488",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #309)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0489",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #310)?\nimport math\nprint(math.floor(309 + 0.7))",
    "opts": [
      "309",
      "310",
      "310",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(309.7)` rounds down to `309`."
  },
  {
    "id": "py_fun_b_0490",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #311)?\ndef add_num(a, b=310):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "315",
      "310",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=310`, returning 5 + 310 = `315`."
  },
  {
    "id": "py_ope_b_0491",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #312)?\na = 321; b = 3; print(a % b)",
    "opts": [
      "0",
      "107",
      "321",
      "0"
    ],
    "ans": 0,
    "exp": "321 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0492",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #313)?\ns = 'python_programming_312'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "312",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '312'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0493",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #314)?\nx = 313; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 313` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0494",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #315)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0495",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #316)?\nimport math\nprint(math.ceil(315 + 0.1))",
    "opts": [
      "316",
      "315",
      "315",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(315.1)` rounds up to `316`."
  },
  {
    "id": "py_fun_i_0496",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #317)?\nsq = lambda x: x ** 2 + 316\nprint(sq(3))",
    "opts": [
      "325",
      "9",
      "322",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 316 = 9 + 316 = `325`."
  },
  {
    "id": "py_ope_i_0497",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #318)?\nx = 317; print(x << 1)",
    "opts": [
      "634",
      "158",
      "1268",
      "0"
    ],
    "ans": 0,
    "exp": "`317 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`634`)."
  },
  {
    "id": "py_dat_a_0498",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #319)?\nd = {'a': 318}; d.update({'a': 328, 'b': 338}); print(d['a'])",
    "opts": [
      "328",
      "318",
      "338",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `328`."
  },
  {
    "id": "py_con_a_0499",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #320)?\nval = 1; res = 'Yes' if (val and 319) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0500",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #321)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0501",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #322)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0502",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #323)?\ndef outer(x):\n    def inner(y):\n        return x * y + 322\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "330",
      "328",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 322 = `330`."
  },
  {
    "id": "py_ope_a_0503",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #324)?\na = 323; b = 328; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(323 < 328)` and `(328 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0504",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #325)?\nx = [648, 649, 650]; print(x[0])",
    "opts": [
      "648",
      "653",
      "647",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[648, 649, 650]` is `648`."
  },
  {
    "id": "py_con_b_0505",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #326)?\na = 325; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "325 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0506",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #327)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0507",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #328)?\nimport math\nprint(math.floor(327 + 0.7))",
    "opts": [
      "327",
      "328",
      "328",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(327.7)` rounds down to `327`."
  },
  {
    "id": "py_fun_b_0508",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #329)?\ndef add_num(a, b=328):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "333",
      "328",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=328`, returning 5 + 328 = `333`."
  },
  {
    "id": "py_ope_b_0509",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #330)?\na = 339; b = 3; print(a % b)",
    "opts": [
      "0",
      "113",
      "339",
      "0"
    ],
    "ans": 0,
    "exp": "339 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0510",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #331)?\ns = 'python_programming_330'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "330",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '330'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0511",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #332)?\nx = 331; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 331` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0512",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #333)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0513",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #334)?\nimport math\nprint(math.ceil(333 + 0.1))",
    "opts": [
      "334",
      "333",
      "333",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(333.1)` rounds up to `334`."
  },
  {
    "id": "py_fun_i_0514",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #335)?\nsq = lambda x: x ** 2 + 334\nprint(sq(3))",
    "opts": [
      "343",
      "9",
      "340",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 334 = 9 + 334 = `343`."
  },
  {
    "id": "py_ope_i_0515",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #336)?\nx = 335; print(x << 1)",
    "opts": [
      "670",
      "167",
      "1340",
      "0"
    ],
    "ans": 0,
    "exp": "`335 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`670`)."
  },
  {
    "id": "py_dat_a_0516",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #337)?\nd = {'a': 336}; d.update({'a': 346, 'b': 356}); print(d['a'])",
    "opts": [
      "346",
      "336",
      "356",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `346`."
  },
  {
    "id": "py_con_a_0517",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #338)?\nval = 1; res = 'Yes' if (val and 337) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0518",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #339)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0519",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #340)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0520",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #341)?\ndef outer(x):\n    def inner(y):\n        return x * y + 340\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "348",
      "346",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 340 = `348`."
  },
  {
    "id": "py_ope_a_0521",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #342)?\na = 341; b = 346; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(341 < 346)` and `(346 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0522",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #343)?\nx = [684, 685, 686]; print(x[0])",
    "opts": [
      "684",
      "689",
      "683",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[684, 685, 686]` is `684`."
  },
  {
    "id": "py_con_b_0523",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #344)?\na = 343; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "343 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0524",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #345)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0525",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #346)?\nimport math\nprint(math.floor(345 + 0.7))",
    "opts": [
      "345",
      "346",
      "346",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(345.7)` rounds down to `345`."
  },
  {
    "id": "py_fun_b_0526",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #347)?\ndef add_num(a, b=346):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "351",
      "346",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=346`, returning 5 + 346 = `351`."
  },
  {
    "id": "py_ope_b_0527",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #348)?\na = 357; b = 3; print(a % b)",
    "opts": [
      "0",
      "119",
      "357",
      "0"
    ],
    "ans": 0,
    "exp": "357 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0528",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #349)?\ns = 'python_programming_348'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "348",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '348'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0529",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #350)?\nx = 349; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 349` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0530",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #351)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0531",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #352)?\nimport math\nprint(math.ceil(351 + 0.1))",
    "opts": [
      "352",
      "351",
      "351",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(351.1)` rounds up to `352`."
  },
  {
    "id": "py_fun_i_0532",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #353)?\nsq = lambda x: x ** 2 + 352\nprint(sq(3))",
    "opts": [
      "361",
      "9",
      "358",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 352 = 9 + 352 = `361`."
  },
  {
    "id": "py_ope_i_0533",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #354)?\nx = 353; print(x << 1)",
    "opts": [
      "706",
      "176",
      "1412",
      "0"
    ],
    "ans": 0,
    "exp": "`353 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`706`)."
  },
  {
    "id": "py_dat_a_0534",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #355)?\nd = {'a': 354}; d.update({'a': 364, 'b': 374}); print(d['a'])",
    "opts": [
      "364",
      "354",
      "374",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `364`."
  },
  {
    "id": "py_con_a_0535",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #356)?\nval = 1; res = 'Yes' if (val and 355) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0536",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #357)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0537",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #358)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0538",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #359)?\ndef outer(x):\n    def inner(y):\n        return x * y + 358\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "366",
      "364",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 358 = `366`."
  },
  {
    "id": "py_ope_a_0539",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #360)?\na = 359; b = 364; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(359 < 364)` and `(364 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0540",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #361)?\nx = [720, 721, 722]; print(x[0])",
    "opts": [
      "720",
      "725",
      "719",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[720, 721, 722]` is `720`."
  },
  {
    "id": "py_con_b_0541",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #362)?\na = 361; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "361 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0542",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #363)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0543",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #364)?\nimport math\nprint(math.floor(363 + 0.7))",
    "opts": [
      "363",
      "364",
      "364",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(363.7)` rounds down to `363`."
  },
  {
    "id": "py_fun_b_0544",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #365)?\ndef add_num(a, b=364):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "369",
      "364",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=364`, returning 5 + 364 = `369`."
  },
  {
    "id": "py_ope_b_0545",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #366)?\na = 375; b = 3; print(a % b)",
    "opts": [
      "0",
      "125",
      "375",
      "0"
    ],
    "ans": 0,
    "exp": "375 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0546",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #367)?\ns = 'python_programming_366'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "366",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '366'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0547",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #368)?\nx = 367; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 367` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0548",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #369)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0549",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #370)?\nimport math\nprint(math.ceil(369 + 0.1))",
    "opts": [
      "370",
      "369",
      "369",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(369.1)` rounds up to `370`."
  },
  {
    "id": "py_fun_i_0550",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #371)?\nsq = lambda x: x ** 2 + 370\nprint(sq(3))",
    "opts": [
      "379",
      "9",
      "376",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 370 = 9 + 370 = `379`."
  },
  {
    "id": "py_ope_i_0551",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #372)?\nx = 371; print(x << 1)",
    "opts": [
      "742",
      "185",
      "1484",
      "0"
    ],
    "ans": 0,
    "exp": "`371 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`742`)."
  },
  {
    "id": "py_dat_a_0552",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #373)?\nd = {'a': 372}; d.update({'a': 382, 'b': 392}); print(d['a'])",
    "opts": [
      "382",
      "372",
      "392",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `382`."
  },
  {
    "id": "py_con_a_0553",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #374)?\nval = 1; res = 'Yes' if (val and 373) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0554",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #375)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0555",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #376)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0556",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #377)?\ndef outer(x):\n    def inner(y):\n        return x * y + 376\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "384",
      "382",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 376 = `384`."
  },
  {
    "id": "py_ope_a_0557",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #378)?\na = 377; b = 382; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(377 < 382)` and `(382 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0558",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #379)?\nx = [756, 757, 758]; print(x[0])",
    "opts": [
      "756",
      "761",
      "755",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[756, 757, 758]` is `756`."
  },
  {
    "id": "py_con_b_0559",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #380)?\na = 379; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "379 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0560",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #381)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0561",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #382)?\nimport math\nprint(math.floor(381 + 0.7))",
    "opts": [
      "381",
      "382",
      "382",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(381.7)` rounds down to `381`."
  },
  {
    "id": "py_fun_b_0562",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #383)?\ndef add_num(a, b=382):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "387",
      "382",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=382`, returning 5 + 382 = `387`."
  },
  {
    "id": "py_ope_b_0563",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #384)?\na = 393; b = 3; print(a % b)",
    "opts": [
      "0",
      "131",
      "393",
      "0"
    ],
    "ans": 0,
    "exp": "393 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0564",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #385)?\ns = 'python_programming_384'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "384",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '384'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0565",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #386)?\nx = 385; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 385` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0566",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #387)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0567",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #388)?\nimport math\nprint(math.ceil(387 + 0.1))",
    "opts": [
      "388",
      "387",
      "387",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(387.1)` rounds up to `388`."
  },
  {
    "id": "py_fun_i_0568",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #389)?\nsq = lambda x: x ** 2 + 388\nprint(sq(3))",
    "opts": [
      "397",
      "9",
      "394",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 388 = 9 + 388 = `397`."
  },
  {
    "id": "py_ope_i_0569",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #390)?\nx = 389; print(x << 1)",
    "opts": [
      "778",
      "194",
      "1556",
      "0"
    ],
    "ans": 0,
    "exp": "`389 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`778`)."
  },
  {
    "id": "py_dat_a_0570",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #391)?\nd = {'a': 390}; d.update({'a': 400, 'b': 410}); print(d['a'])",
    "opts": [
      "400",
      "390",
      "410",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `400`."
  },
  {
    "id": "py_con_a_0571",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #392)?\nval = 1; res = 'Yes' if (val and 391) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0572",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #393)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0573",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #394)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0574",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #395)?\ndef outer(x):\n    def inner(y):\n        return x * y + 394\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "402",
      "400",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 394 = `402`."
  },
  {
    "id": "py_ope_a_0575",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #396)?\na = 395; b = 400; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(395 < 400)` and `(400 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0576",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #397)?\nx = [792, 793, 794]; print(x[0])",
    "opts": [
      "792",
      "797",
      "791",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[792, 793, 794]` is `792`."
  },
  {
    "id": "py_con_b_0577",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #398)?\na = 397; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "397 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0578",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #399)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0579",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #400)?\nimport math\nprint(math.floor(399 + 0.7))",
    "opts": [
      "399",
      "400",
      "400",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(399.7)` rounds down to `399`."
  },
  {
    "id": "py_fun_b_0580",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #401)?\ndef add_num(a, b=400):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "405",
      "400",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=400`, returning 5 + 400 = `405`."
  },
  {
    "id": "py_ope_b_0581",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #402)?\na = 411; b = 3; print(a % b)",
    "opts": [
      "0",
      "137",
      "411",
      "0"
    ],
    "ans": 0,
    "exp": "411 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0582",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #403)?\ns = 'python_programming_402'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "402",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '402'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0583",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #404)?\nx = 403; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 403` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0584",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #405)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0585",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #406)?\nimport math\nprint(math.ceil(405 + 0.1))",
    "opts": [
      "406",
      "405",
      "405",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(405.1)` rounds up to `406`."
  },
  {
    "id": "py_fun_i_0586",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #407)?\nsq = lambda x: x ** 2 + 406\nprint(sq(3))",
    "opts": [
      "415",
      "9",
      "412",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 406 = 9 + 406 = `415`."
  },
  {
    "id": "py_ope_i_0587",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #408)?\nx = 407; print(x << 1)",
    "opts": [
      "814",
      "203",
      "1628",
      "0"
    ],
    "ans": 0,
    "exp": "`407 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`814`)."
  },
  {
    "id": "py_dat_a_0588",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #409)?\nd = {'a': 408}; d.update({'a': 418, 'b': 428}); print(d['a'])",
    "opts": [
      "418",
      "408",
      "428",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `418`."
  },
  {
    "id": "py_con_a_0589",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #410)?\nval = 1; res = 'Yes' if (val and 409) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0590",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #411)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0591",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #412)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0592",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #413)?\ndef outer(x):\n    def inner(y):\n        return x * y + 412\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "420",
      "418",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 412 = `420`."
  },
  {
    "id": "py_ope_a_0593",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #414)?\na = 413; b = 418; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(413 < 418)` and `(418 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0594",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #415)?\nx = [828, 829, 830]; print(x[0])",
    "opts": [
      "828",
      "833",
      "827",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[828, 829, 830]` is `828`."
  },
  {
    "id": "py_con_b_0595",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #416)?\na = 415; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "415 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0596",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #417)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0597",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #418)?\nimport math\nprint(math.floor(417 + 0.7))",
    "opts": [
      "417",
      "418",
      "418",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(417.7)` rounds down to `417`."
  },
  {
    "id": "py_fun_b_0598",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #419)?\ndef add_num(a, b=418):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "423",
      "418",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=418`, returning 5 + 418 = `423`."
  },
  {
    "id": "py_ope_b_0599",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #420)?\na = 429; b = 3; print(a % b)",
    "opts": [
      "0",
      "143",
      "429",
      "0"
    ],
    "ans": 0,
    "exp": "429 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0600",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #421)?\ns = 'python_programming_420'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "420",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '420'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0601",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #422)?\nx = 421; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 421` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0602",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #423)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0603",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #424)?\nimport math\nprint(math.ceil(423 + 0.1))",
    "opts": [
      "424",
      "423",
      "423",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(423.1)` rounds up to `424`."
  },
  {
    "id": "py_fun_i_0604",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #425)?\nsq = lambda x: x ** 2 + 424\nprint(sq(3))",
    "opts": [
      "433",
      "9",
      "430",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 424 = 9 + 424 = `433`."
  },
  {
    "id": "py_ope_i_0605",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #426)?\nx = 425; print(x << 1)",
    "opts": [
      "850",
      "212",
      "1700",
      "0"
    ],
    "ans": 0,
    "exp": "`425 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`850`)."
  },
  {
    "id": "py_dat_a_0606",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #427)?\nd = {'a': 426}; d.update({'a': 436, 'b': 446}); print(d['a'])",
    "opts": [
      "436",
      "426",
      "446",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `436`."
  },
  {
    "id": "py_con_a_0607",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #428)?\nval = 1; res = 'Yes' if (val and 427) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0608",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #429)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0609",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #430)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0610",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #431)?\ndef outer(x):\n    def inner(y):\n        return x * y + 430\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "438",
      "436",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 430 = `438`."
  },
  {
    "id": "py_ope_a_0611",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #432)?\na = 431; b = 436; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(431 < 436)` and `(436 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0612",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #433)?\nx = [864, 865, 866]; print(x[0])",
    "opts": [
      "864",
      "869",
      "863",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[864, 865, 866]` is `864`."
  },
  {
    "id": "py_con_b_0613",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #434)?\na = 433; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "433 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0614",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #435)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0615",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #436)?\nimport math\nprint(math.floor(435 + 0.7))",
    "opts": [
      "435",
      "436",
      "436",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(435.7)` rounds down to `435`."
  },
  {
    "id": "py_fun_b_0616",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #437)?\ndef add_num(a, b=436):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "441",
      "436",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=436`, returning 5 + 436 = `441`."
  },
  {
    "id": "py_ope_b_0617",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #438)?\na = 447; b = 3; print(a % b)",
    "opts": [
      "0",
      "149",
      "447",
      "0"
    ],
    "ans": 0,
    "exp": "447 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0618",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #439)?\ns = 'python_programming_438'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "438",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '438'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0619",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #440)?\nx = 439; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 439` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0620",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #441)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0621",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #442)?\nimport math\nprint(math.ceil(441 + 0.1))",
    "opts": [
      "442",
      "441",
      "441",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(441.1)` rounds up to `442`."
  },
  {
    "id": "py_fun_i_0622",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #443)?\nsq = lambda x: x ** 2 + 442\nprint(sq(3))",
    "opts": [
      "451",
      "9",
      "448",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 442 = 9 + 442 = `451`."
  },
  {
    "id": "py_ope_i_0623",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #444)?\nx = 443; print(x << 1)",
    "opts": [
      "886",
      "221",
      "1772",
      "0"
    ],
    "ans": 0,
    "exp": "`443 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`886`)."
  },
  {
    "id": "py_dat_a_0624",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #445)?\nd = {'a': 444}; d.update({'a': 454, 'b': 464}); print(d['a'])",
    "opts": [
      "454",
      "444",
      "464",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `454`."
  },
  {
    "id": "py_con_a_0625",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #446)?\nval = 1; res = 'Yes' if (val and 445) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0626",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #447)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0627",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #448)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0628",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #449)?\ndef outer(x):\n    def inner(y):\n        return x * y + 448\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "456",
      "454",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 448 = `456`."
  },
  {
    "id": "py_ope_a_0629",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #450)?\na = 449; b = 454; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(449 < 454)` and `(454 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0630",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #451)?\nx = [900, 901, 902]; print(x[0])",
    "opts": [
      "900",
      "905",
      "899",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[900, 901, 902]` is `900`."
  },
  {
    "id": "py_con_b_0631",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #452)?\na = 451; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "451 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0632",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #453)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0633",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #454)?\nimport math\nprint(math.floor(453 + 0.7))",
    "opts": [
      "453",
      "454",
      "454",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(453.7)` rounds down to `453`."
  },
  {
    "id": "py_fun_b_0634",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #455)?\ndef add_num(a, b=454):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "459",
      "454",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=454`, returning 5 + 454 = `459`."
  },
  {
    "id": "py_ope_b_0635",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #456)?\na = 465; b = 3; print(a % b)",
    "opts": [
      "0",
      "155",
      "465",
      "0"
    ],
    "ans": 0,
    "exp": "465 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0636",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #457)?\ns = 'python_programming_456'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "456",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '456'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0637",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #458)?\nx = 457; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 457` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0638",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #459)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0639",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #460)?\nimport math\nprint(math.ceil(459 + 0.1))",
    "opts": [
      "460",
      "459",
      "459",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(459.1)` rounds up to `460`."
  },
  {
    "id": "py_fun_i_0640",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #461)?\nsq = lambda x: x ** 2 + 460\nprint(sq(3))",
    "opts": [
      "469",
      "9",
      "466",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 460 = 9 + 460 = `469`."
  },
  {
    "id": "py_ope_i_0641",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #462)?\nx = 461; print(x << 1)",
    "opts": [
      "922",
      "230",
      "1844",
      "0"
    ],
    "ans": 0,
    "exp": "`461 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`922`)."
  },
  {
    "id": "py_dat_a_0642",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #463)?\nd = {'a': 462}; d.update({'a': 472, 'b': 482}); print(d['a'])",
    "opts": [
      "472",
      "462",
      "482",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `472`."
  },
  {
    "id": "py_con_a_0643",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #464)?\nval = 1; res = 'Yes' if (val and 463) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0644",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #465)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0645",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #466)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0646",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #467)?\ndef outer(x):\n    def inner(y):\n        return x * y + 466\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "474",
      "472",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 466 = `474`."
  },
  {
    "id": "py_ope_a_0647",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #468)?\na = 467; b = 472; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(467 < 472)` and `(472 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0648",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #469)?\nx = [936, 937, 938]; print(x[0])",
    "opts": [
      "936",
      "941",
      "935",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[936, 937, 938]` is `936`."
  },
  {
    "id": "py_con_b_0649",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #470)?\na = 469; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "469 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0650",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #471)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0651",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #472)?\nimport math\nprint(math.floor(471 + 0.7))",
    "opts": [
      "471",
      "472",
      "472",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(471.7)` rounds down to `471`."
  },
  {
    "id": "py_fun_b_0652",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #473)?\ndef add_num(a, b=472):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "477",
      "472",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=472`, returning 5 + 472 = `477`."
  },
  {
    "id": "py_ope_b_0653",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #474)?\na = 483; b = 3; print(a % b)",
    "opts": [
      "0",
      "161",
      "483",
      "0"
    ],
    "ans": 0,
    "exp": "483 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0654",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #475)?\ns = 'python_programming_474'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "474",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '474'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0655",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #476)?\nx = 475; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 475` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0656",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #477)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0657",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #478)?\nimport math\nprint(math.ceil(477 + 0.1))",
    "opts": [
      "478",
      "477",
      "477",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(477.1)` rounds up to `478`."
  },
  {
    "id": "py_fun_i_0658",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #479)?\nsq = lambda x: x ** 2 + 478\nprint(sq(3))",
    "opts": [
      "487",
      "9",
      "484",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 478 = 9 + 478 = `487`."
  },
  {
    "id": "py_ope_i_0659",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #480)?\nx = 479; print(x << 1)",
    "opts": [
      "958",
      "239",
      "1916",
      "0"
    ],
    "ans": 0,
    "exp": "`479 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`958`)."
  },
  {
    "id": "py_dat_a_0660",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #481)?\nd = {'a': 480}; d.update({'a': 490, 'b': 500}); print(d['a'])",
    "opts": [
      "490",
      "480",
      "500",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `490`."
  },
  {
    "id": "py_con_a_0661",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #482)?\nval = 1; res = 'Yes' if (val and 481) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0662",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #483)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0663",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #484)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0664",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #485)?\ndef outer(x):\n    def inner(y):\n        return x * y + 484\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "492",
      "490",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 484 = `492`."
  },
  {
    "id": "py_ope_a_0665",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #486)?\na = 485; b = 490; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(485 < 490)` and `(490 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0666",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #487)?\nx = [972, 973, 974]; print(x[0])",
    "opts": [
      "972",
      "977",
      "971",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[972, 973, 974]` is `972`."
  },
  {
    "id": "py_con_b_0667",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #488)?\na = 487; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "487 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0668",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #489)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0669",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #490)?\nimport math\nprint(math.floor(489 + 0.7))",
    "opts": [
      "489",
      "490",
      "490",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(489.7)` rounds down to `489`."
  },
  {
    "id": "py_fun_b_0670",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #491)?\ndef add_num(a, b=490):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "495",
      "490",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=490`, returning 5 + 490 = `495`."
  },
  {
    "id": "py_ope_b_0671",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #492)?\na = 501; b = 3; print(a % b)",
    "opts": [
      "0",
      "167",
      "501",
      "0"
    ],
    "ans": 0,
    "exp": "501 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0672",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #493)?\ns = 'python_programming_492'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "492",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '492'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0673",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #494)?\nx = 493; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 493` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0674",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #495)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0675",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #496)?\nimport math\nprint(math.ceil(495 + 0.1))",
    "opts": [
      "496",
      "495",
      "495",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(495.1)` rounds up to `496`."
  },
  {
    "id": "py_fun_i_0676",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #497)?\nsq = lambda x: x ** 2 + 496\nprint(sq(3))",
    "opts": [
      "505",
      "9",
      "502",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 496 = 9 + 496 = `505`."
  },
  {
    "id": "py_ope_i_0677",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #498)?\nx = 497; print(x << 1)",
    "opts": [
      "994",
      "248",
      "1988",
      "0"
    ],
    "ans": 0,
    "exp": "`497 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`994`)."
  },
  {
    "id": "py_dat_a_0678",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #499)?\nd = {'a': 498}; d.update({'a': 508, 'b': 518}); print(d['a'])",
    "opts": [
      "508",
      "498",
      "518",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `508`."
  },
  {
    "id": "py_con_a_0679",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #500)?\nval = 1; res = 'Yes' if (val and 499) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0680",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #501)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0681",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #502)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0682",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #503)?\ndef outer(x):\n    def inner(y):\n        return x * y + 502\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "510",
      "508",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 502 = `510`."
  },
  {
    "id": "py_ope_a_0683",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #504)?\na = 503; b = 508; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(503 < 508)` and `(508 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0684",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #505)?\nx = [1008, 1009, 1010]; print(x[0])",
    "opts": [
      "1008",
      "1013",
      "1007",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1008, 1009, 1010]` is `1008`."
  },
  {
    "id": "py_con_b_0685",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #506)?\na = 505; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "505 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0686",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #507)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0687",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #508)?\nimport math\nprint(math.floor(507 + 0.7))",
    "opts": [
      "507",
      "508",
      "508",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(507.7)` rounds down to `507`."
  },
  {
    "id": "py_fun_b_0688",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #509)?\ndef add_num(a, b=508):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "513",
      "508",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=508`, returning 5 + 508 = `513`."
  },
  {
    "id": "py_ope_b_0689",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #510)?\na = 519; b = 3; print(a % b)",
    "opts": [
      "0",
      "173",
      "519",
      "0"
    ],
    "ans": 0,
    "exp": "519 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0690",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #511)?\ns = 'python_programming_510'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "510",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '510'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0691",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #512)?\nx = 511; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 511` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0692",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #513)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0693",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #514)?\nimport math\nprint(math.ceil(513 + 0.1))",
    "opts": [
      "514",
      "513",
      "513",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(513.1)` rounds up to `514`."
  },
  {
    "id": "py_fun_i_0694",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #515)?\nsq = lambda x: x ** 2 + 514\nprint(sq(3))",
    "opts": [
      "523",
      "9",
      "520",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 514 = 9 + 514 = `523`."
  },
  {
    "id": "py_ope_i_0695",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #516)?\nx = 515; print(x << 1)",
    "opts": [
      "1030",
      "257",
      "2060",
      "0"
    ],
    "ans": 0,
    "exp": "`515 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1030`)."
  },
  {
    "id": "py_dat_a_0696",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #517)?\nd = {'a': 516}; d.update({'a': 526, 'b': 536}); print(d['a'])",
    "opts": [
      "526",
      "516",
      "536",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `526`."
  },
  {
    "id": "py_con_a_0697",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #518)?\nval = 1; res = 'Yes' if (val and 517) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0698",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #519)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0699",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #520)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0700",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #521)?\ndef outer(x):\n    def inner(y):\n        return x * y + 520\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "528",
      "526",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 520 = `528`."
  },
  {
    "id": "py_ope_a_0701",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #522)?\na = 521; b = 526; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(521 < 526)` and `(526 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0702",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #523)?\nx = [1044, 1045, 1046]; print(x[0])",
    "opts": [
      "1044",
      "1049",
      "1043",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1044, 1045, 1046]` is `1044`."
  },
  {
    "id": "py_con_b_0703",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #524)?\na = 523; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "523 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0704",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #525)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0705",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #526)?\nimport math\nprint(math.floor(525 + 0.7))",
    "opts": [
      "525",
      "526",
      "526",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(525.7)` rounds down to `525`."
  },
  {
    "id": "py_fun_b_0706",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #527)?\ndef add_num(a, b=526):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "531",
      "526",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=526`, returning 5 + 526 = `531`."
  },
  {
    "id": "py_ope_b_0707",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #528)?\na = 537; b = 3; print(a % b)",
    "opts": [
      "0",
      "179",
      "537",
      "0"
    ],
    "ans": 0,
    "exp": "537 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0708",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #529)?\ns = 'python_programming_528'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "528",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '528'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0709",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #530)?\nx = 529; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 529` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0710",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #531)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0711",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #532)?\nimport math\nprint(math.ceil(531 + 0.1))",
    "opts": [
      "532",
      "531",
      "531",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(531.1)` rounds up to `532`."
  },
  {
    "id": "py_fun_i_0712",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #533)?\nsq = lambda x: x ** 2 + 532\nprint(sq(3))",
    "opts": [
      "541",
      "9",
      "538",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 532 = 9 + 532 = `541`."
  },
  {
    "id": "py_ope_i_0713",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #534)?\nx = 533; print(x << 1)",
    "opts": [
      "1066",
      "266",
      "2132",
      "0"
    ],
    "ans": 0,
    "exp": "`533 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1066`)."
  },
  {
    "id": "py_dat_a_0714",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #535)?\nd = {'a': 534}; d.update({'a': 544, 'b': 554}); print(d['a'])",
    "opts": [
      "544",
      "534",
      "554",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `544`."
  },
  {
    "id": "py_con_a_0715",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #536)?\nval = 1; res = 'Yes' if (val and 535) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0716",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #537)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0717",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #538)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0718",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #539)?\ndef outer(x):\n    def inner(y):\n        return x * y + 538\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "546",
      "544",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 538 = `546`."
  },
  {
    "id": "py_ope_a_0719",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #540)?\na = 539; b = 544; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(539 < 544)` and `(544 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0720",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #541)?\nx = [1080, 1081, 1082]; print(x[0])",
    "opts": [
      "1080",
      "1085",
      "1079",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1080, 1081, 1082]` is `1080`."
  },
  {
    "id": "py_con_b_0721",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #542)?\na = 541; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "541 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0722",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #543)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0723",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #544)?\nimport math\nprint(math.floor(543 + 0.7))",
    "opts": [
      "543",
      "544",
      "544",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(543.7)` rounds down to `543`."
  },
  {
    "id": "py_fun_b_0724",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #545)?\ndef add_num(a, b=544):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "549",
      "544",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=544`, returning 5 + 544 = `549`."
  },
  {
    "id": "py_ope_b_0725",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #546)?\na = 555; b = 3; print(a % b)",
    "opts": [
      "0",
      "185",
      "555",
      "0"
    ],
    "ans": 0,
    "exp": "555 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0726",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #547)?\ns = 'python_programming_546'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "546",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '546'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0727",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #548)?\nx = 547; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 547` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0728",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #549)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0729",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #550)?\nimport math\nprint(math.ceil(549 + 0.1))",
    "opts": [
      "550",
      "549",
      "549",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(549.1)` rounds up to `550`."
  },
  {
    "id": "py_fun_i_0730",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #551)?\nsq = lambda x: x ** 2 + 550\nprint(sq(3))",
    "opts": [
      "559",
      "9",
      "556",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 550 = 9 + 550 = `559`."
  },
  {
    "id": "py_ope_i_0731",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #552)?\nx = 551; print(x << 1)",
    "opts": [
      "1102",
      "275",
      "2204",
      "0"
    ],
    "ans": 0,
    "exp": "`551 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1102`)."
  },
  {
    "id": "py_dat_a_0732",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #553)?\nd = {'a': 552}; d.update({'a': 562, 'b': 572}); print(d['a'])",
    "opts": [
      "562",
      "552",
      "572",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `562`."
  },
  {
    "id": "py_con_a_0733",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #554)?\nval = 1; res = 'Yes' if (val and 553) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0734",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #555)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0735",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #556)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0736",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #557)?\ndef outer(x):\n    def inner(y):\n        return x * y + 556\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "564",
      "562",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 556 = `564`."
  },
  {
    "id": "py_ope_a_0737",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #558)?\na = 557; b = 562; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(557 < 562)` and `(562 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0738",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #559)?\nx = [1116, 1117, 1118]; print(x[0])",
    "opts": [
      "1116",
      "1121",
      "1115",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1116, 1117, 1118]` is `1116`."
  },
  {
    "id": "py_con_b_0739",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #560)?\na = 559; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "559 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0740",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #561)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0741",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #562)?\nimport math\nprint(math.floor(561 + 0.7))",
    "opts": [
      "561",
      "562",
      "562",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(561.7)` rounds down to `561`."
  },
  {
    "id": "py_fun_b_0742",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #563)?\ndef add_num(a, b=562):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "567",
      "562",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=562`, returning 5 + 562 = `567`."
  },
  {
    "id": "py_ope_b_0743",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #564)?\na = 573; b = 3; print(a % b)",
    "opts": [
      "0",
      "191",
      "573",
      "0"
    ],
    "ans": 0,
    "exp": "573 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0744",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #565)?\ns = 'python_programming_564'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "564",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '564'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0745",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #566)?\nx = 565; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 565` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0746",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #567)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0747",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #568)?\nimport math\nprint(math.ceil(567 + 0.1))",
    "opts": [
      "568",
      "567",
      "567",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(567.1)` rounds up to `568`."
  },
  {
    "id": "py_fun_i_0748",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #569)?\nsq = lambda x: x ** 2 + 568\nprint(sq(3))",
    "opts": [
      "577",
      "9",
      "574",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 568 = 9 + 568 = `577`."
  },
  {
    "id": "py_ope_i_0749",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #570)?\nx = 569; print(x << 1)",
    "opts": [
      "1138",
      "284",
      "2276",
      "0"
    ],
    "ans": 0,
    "exp": "`569 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1138`)."
  },
  {
    "id": "py_dat_a_0750",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #571)?\nd = {'a': 570}; d.update({'a': 580, 'b': 590}); print(d['a'])",
    "opts": [
      "580",
      "570",
      "590",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `580`."
  },
  {
    "id": "py_con_a_0751",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #572)?\nval = 1; res = 'Yes' if (val and 571) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0752",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #573)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0753",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #574)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0754",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #575)?\ndef outer(x):\n    def inner(y):\n        return x * y + 574\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "582",
      "580",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 574 = `582`."
  },
  {
    "id": "py_ope_a_0755",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #576)?\na = 575; b = 580; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(575 < 580)` and `(580 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0756",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #577)?\nx = [1152, 1153, 1154]; print(x[0])",
    "opts": [
      "1152",
      "1157",
      "1151",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1152, 1153, 1154]` is `1152`."
  },
  {
    "id": "py_con_b_0757",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #578)?\na = 577; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "577 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0758",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #579)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0759",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #580)?\nimport math\nprint(math.floor(579 + 0.7))",
    "opts": [
      "579",
      "580",
      "580",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(579.7)` rounds down to `579`."
  },
  {
    "id": "py_fun_b_0760",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #581)?\ndef add_num(a, b=580):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "585",
      "580",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=580`, returning 5 + 580 = `585`."
  },
  {
    "id": "py_ope_b_0761",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #582)?\na = 591; b = 3; print(a % b)",
    "opts": [
      "0",
      "197",
      "591",
      "0"
    ],
    "ans": 0,
    "exp": "591 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0762",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #583)?\ns = 'python_programming_582'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "582",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '582'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0763",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #584)?\nx = 583; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 583` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0764",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #585)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0765",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #586)?\nimport math\nprint(math.ceil(585 + 0.1))",
    "opts": [
      "586",
      "585",
      "585",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(585.1)` rounds up to `586`."
  },
  {
    "id": "py_fun_i_0766",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #587)?\nsq = lambda x: x ** 2 + 586\nprint(sq(3))",
    "opts": [
      "595",
      "9",
      "592",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 586 = 9 + 586 = `595`."
  },
  {
    "id": "py_ope_i_0767",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #588)?\nx = 587; print(x << 1)",
    "opts": [
      "1174",
      "293",
      "2348",
      "0"
    ],
    "ans": 0,
    "exp": "`587 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1174`)."
  },
  {
    "id": "py_dat_a_0768",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #589)?\nd = {'a': 588}; d.update({'a': 598, 'b': 608}); print(d['a'])",
    "opts": [
      "598",
      "588",
      "608",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `598`."
  },
  {
    "id": "py_con_a_0769",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #590)?\nval = 1; res = 'Yes' if (val and 589) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0770",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #591)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0771",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #592)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0772",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #593)?\ndef outer(x):\n    def inner(y):\n        return x * y + 592\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "600",
      "598",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 592 = `600`."
  },
  {
    "id": "py_ope_a_0773",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #594)?\na = 593; b = 598; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(593 < 598)` and `(598 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0774",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #595)?\nx = [1188, 1189, 1190]; print(x[0])",
    "opts": [
      "1188",
      "1193",
      "1187",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1188, 1189, 1190]` is `1188`."
  },
  {
    "id": "py_con_b_0775",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #596)?\na = 595; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "595 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0776",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #597)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0777",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #598)?\nimport math\nprint(math.floor(597 + 0.7))",
    "opts": [
      "597",
      "598",
      "598",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(597.7)` rounds down to `597`."
  },
  {
    "id": "py_fun_b_0778",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #599)?\ndef add_num(a, b=598):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "603",
      "598",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=598`, returning 5 + 598 = `603`."
  },
  {
    "id": "py_ope_b_0779",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #600)?\na = 609; b = 3; print(a % b)",
    "opts": [
      "0",
      "203",
      "609",
      "0"
    ],
    "ans": 0,
    "exp": "609 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0780",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #601)?\ns = 'python_programming_600'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "600",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '600'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0781",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #602)?\nx = 601; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 601` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0782",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #603)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0783",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #604)?\nimport math\nprint(math.ceil(603 + 0.1))",
    "opts": [
      "604",
      "603",
      "603",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(603.1)` rounds up to `604`."
  },
  {
    "id": "py_fun_i_0784",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #605)?\nsq = lambda x: x ** 2 + 604\nprint(sq(3))",
    "opts": [
      "613",
      "9",
      "610",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 604 = 9 + 604 = `613`."
  },
  {
    "id": "py_ope_i_0785",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #606)?\nx = 605; print(x << 1)",
    "opts": [
      "1210",
      "302",
      "2420",
      "0"
    ],
    "ans": 0,
    "exp": "`605 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1210`)."
  },
  {
    "id": "py_dat_a_0786",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #607)?\nd = {'a': 606}; d.update({'a': 616, 'b': 626}); print(d['a'])",
    "opts": [
      "616",
      "606",
      "626",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `616`."
  },
  {
    "id": "py_con_a_0787",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #608)?\nval = 1; res = 'Yes' if (val and 607) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0788",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #609)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0789",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #610)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0790",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #611)?\ndef outer(x):\n    def inner(y):\n        return x * y + 610\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "618",
      "616",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 610 = `618`."
  },
  {
    "id": "py_ope_a_0791",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #612)?\na = 611; b = 616; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(611 < 616)` and `(616 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0792",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #613)?\nx = [1224, 1225, 1226]; print(x[0])",
    "opts": [
      "1224",
      "1229",
      "1223",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1224, 1225, 1226]` is `1224`."
  },
  {
    "id": "py_con_b_0793",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #614)?\na = 613; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "613 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0794",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #615)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0795",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #616)?\nimport math\nprint(math.floor(615 + 0.7))",
    "opts": [
      "615",
      "616",
      "616",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(615.7)` rounds down to `615`."
  },
  {
    "id": "py_fun_b_0796",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #617)?\ndef add_num(a, b=616):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "621",
      "616",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=616`, returning 5 + 616 = `621`."
  },
  {
    "id": "py_ope_b_0797",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #618)?\na = 627; b = 3; print(a % b)",
    "opts": [
      "0",
      "209",
      "627",
      "0"
    ],
    "ans": 0,
    "exp": "627 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0798",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #619)?\ns = 'python_programming_618'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "618",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '618'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0799",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #620)?\nx = 619; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 619` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0800",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #621)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0801",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #622)?\nimport math\nprint(math.ceil(621 + 0.1))",
    "opts": [
      "622",
      "621",
      "621",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(621.1)` rounds up to `622`."
  },
  {
    "id": "py_fun_i_0802",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #623)?\nsq = lambda x: x ** 2 + 622\nprint(sq(3))",
    "opts": [
      "631",
      "9",
      "628",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 622 = 9 + 622 = `631`."
  },
  {
    "id": "py_ope_i_0803",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #624)?\nx = 623; print(x << 1)",
    "opts": [
      "1246",
      "311",
      "2492",
      "0"
    ],
    "ans": 0,
    "exp": "`623 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1246`)."
  },
  {
    "id": "py_dat_a_0804",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #625)?\nd = {'a': 624}; d.update({'a': 634, 'b': 644}); print(d['a'])",
    "opts": [
      "634",
      "624",
      "644",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `634`."
  },
  {
    "id": "py_con_a_0805",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #626)?\nval = 1; res = 'Yes' if (val and 625) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0806",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #627)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0807",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #628)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0808",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #629)?\ndef outer(x):\n    def inner(y):\n        return x * y + 628\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "636",
      "634",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 628 = `636`."
  },
  {
    "id": "py_ope_a_0809",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #630)?\na = 629; b = 634; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(629 < 634)` and `(634 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0810",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #631)?\nx = [1260, 1261, 1262]; print(x[0])",
    "opts": [
      "1260",
      "1265",
      "1259",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1260, 1261, 1262]` is `1260`."
  },
  {
    "id": "py_con_b_0811",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #632)?\na = 631; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "631 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0812",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #633)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0813",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #634)?\nimport math\nprint(math.floor(633 + 0.7))",
    "opts": [
      "633",
      "634",
      "634",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(633.7)` rounds down to `633`."
  },
  {
    "id": "py_fun_b_0814",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #635)?\ndef add_num(a, b=634):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "639",
      "634",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=634`, returning 5 + 634 = `639`."
  },
  {
    "id": "py_ope_b_0815",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #636)?\na = 645; b = 3; print(a % b)",
    "opts": [
      "0",
      "215",
      "645",
      "0"
    ],
    "ans": 0,
    "exp": "645 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0816",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #637)?\ns = 'python_programming_636'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "636",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '636'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0817",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #638)?\nx = 637; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 637` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0818",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #639)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0819",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #640)?\nimport math\nprint(math.ceil(639 + 0.1))",
    "opts": [
      "640",
      "639",
      "639",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(639.1)` rounds up to `640`."
  },
  {
    "id": "py_fun_i_0820",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #641)?\nsq = lambda x: x ** 2 + 640\nprint(sq(3))",
    "opts": [
      "649",
      "9",
      "646",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 640 = 9 + 640 = `649`."
  },
  {
    "id": "py_ope_i_0821",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #642)?\nx = 641; print(x << 1)",
    "opts": [
      "1282",
      "320",
      "2564",
      "0"
    ],
    "ans": 0,
    "exp": "`641 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1282`)."
  },
  {
    "id": "py_dat_a_0822",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #643)?\nd = {'a': 642}; d.update({'a': 652, 'b': 662}); print(d['a'])",
    "opts": [
      "652",
      "642",
      "662",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `652`."
  },
  {
    "id": "py_con_a_0823",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #644)?\nval = 1; res = 'Yes' if (val and 643) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0824",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #645)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0825",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #646)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0826",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #647)?\ndef outer(x):\n    def inner(y):\n        return x * y + 646\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "654",
      "652",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 646 = `654`."
  },
  {
    "id": "py_ope_a_0827",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #648)?\na = 647; b = 652; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(647 < 652)` and `(652 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0828",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #649)?\nx = [1296, 1297, 1298]; print(x[0])",
    "opts": [
      "1296",
      "1301",
      "1295",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1296, 1297, 1298]` is `1296`."
  },
  {
    "id": "py_con_b_0829",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #650)?\na = 649; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "649 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0830",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #651)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0831",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #652)?\nimport math\nprint(math.floor(651 + 0.7))",
    "opts": [
      "651",
      "652",
      "652",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(651.7)` rounds down to `651`."
  },
  {
    "id": "py_fun_b_0832",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #653)?\ndef add_num(a, b=652):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "657",
      "652",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=652`, returning 5 + 652 = `657`."
  },
  {
    "id": "py_ope_b_0833",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #654)?\na = 663; b = 3; print(a % b)",
    "opts": [
      "0",
      "221",
      "663",
      "0"
    ],
    "ans": 0,
    "exp": "663 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0834",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #655)?\ns = 'python_programming_654'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "654",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '654'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0835",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #656)?\nx = 655; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 655` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0836",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #657)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0837",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #658)?\nimport math\nprint(math.ceil(657 + 0.1))",
    "opts": [
      "658",
      "657",
      "657",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(657.1)` rounds up to `658`."
  },
  {
    "id": "py_fun_i_0838",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #659)?\nsq = lambda x: x ** 2 + 658\nprint(sq(3))",
    "opts": [
      "667",
      "9",
      "664",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 658 = 9 + 658 = `667`."
  },
  {
    "id": "py_ope_i_0839",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #660)?\nx = 659; print(x << 1)",
    "opts": [
      "1318",
      "329",
      "2636",
      "0"
    ],
    "ans": 0,
    "exp": "`659 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1318`)."
  },
  {
    "id": "py_dat_a_0840",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #661)?\nd = {'a': 660}; d.update({'a': 670, 'b': 680}); print(d['a'])",
    "opts": [
      "670",
      "660",
      "680",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `670`."
  },
  {
    "id": "py_con_a_0841",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #662)?\nval = 1; res = 'Yes' if (val and 661) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0842",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #663)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0843",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #664)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0844",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #665)?\ndef outer(x):\n    def inner(y):\n        return x * y + 664\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "672",
      "670",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 664 = `672`."
  },
  {
    "id": "py_ope_a_0845",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #666)?\na = 665; b = 670; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(665 < 670)` and `(670 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0846",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #667)?\nx = [1332, 1333, 1334]; print(x[0])",
    "opts": [
      "1332",
      "1337",
      "1331",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1332, 1333, 1334]` is `1332`."
  },
  {
    "id": "py_con_b_0847",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #668)?\na = 667; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "667 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0848",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #669)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0849",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #670)?\nimport math\nprint(math.floor(669 + 0.7))",
    "opts": [
      "669",
      "670",
      "670",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(669.7)` rounds down to `669`."
  },
  {
    "id": "py_fun_b_0850",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #671)?\ndef add_num(a, b=670):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "675",
      "670",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=670`, returning 5 + 670 = `675`."
  },
  {
    "id": "py_ope_b_0851",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #672)?\na = 681; b = 3; print(a % b)",
    "opts": [
      "0",
      "227",
      "681",
      "0"
    ],
    "ans": 0,
    "exp": "681 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0852",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #673)?\ns = 'python_programming_672'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "672",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '672'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0853",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #674)?\nx = 673; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 673` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0854",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #675)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0855",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #676)?\nimport math\nprint(math.ceil(675 + 0.1))",
    "opts": [
      "676",
      "675",
      "675",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(675.1)` rounds up to `676`."
  },
  {
    "id": "py_fun_i_0856",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #677)?\nsq = lambda x: x ** 2 + 676\nprint(sq(3))",
    "opts": [
      "685",
      "9",
      "682",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 676 = 9 + 676 = `685`."
  },
  {
    "id": "py_ope_i_0857",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #678)?\nx = 677; print(x << 1)",
    "opts": [
      "1354",
      "338",
      "2708",
      "0"
    ],
    "ans": 0,
    "exp": "`677 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1354`)."
  },
  {
    "id": "py_dat_a_0858",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #679)?\nd = {'a': 678}; d.update({'a': 688, 'b': 698}); print(d['a'])",
    "opts": [
      "688",
      "678",
      "698",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `688`."
  },
  {
    "id": "py_con_a_0859",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #680)?\nval = 1; res = 'Yes' if (val and 679) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0860",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #681)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0861",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #682)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0862",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #683)?\ndef outer(x):\n    def inner(y):\n        return x * y + 682\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "690",
      "688",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 682 = `690`."
  },
  {
    "id": "py_ope_a_0863",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #684)?\na = 683; b = 688; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(683 < 688)` and `(688 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0864",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #685)?\nx = [1368, 1369, 1370]; print(x[0])",
    "opts": [
      "1368",
      "1373",
      "1367",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1368, 1369, 1370]` is `1368`."
  },
  {
    "id": "py_con_b_0865",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #686)?\na = 685; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "685 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0866",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #687)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0867",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #688)?\nimport math\nprint(math.floor(687 + 0.7))",
    "opts": [
      "687",
      "688",
      "688",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(687.7)` rounds down to `687`."
  },
  {
    "id": "py_fun_b_0868",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #689)?\ndef add_num(a, b=688):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "693",
      "688",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=688`, returning 5 + 688 = `693`."
  },
  {
    "id": "py_ope_b_0869",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #690)?\na = 699; b = 3; print(a % b)",
    "opts": [
      "0",
      "233",
      "699",
      "0"
    ],
    "ans": 0,
    "exp": "699 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0870",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #691)?\ns = 'python_programming_690'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "690",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '690'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0871",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #692)?\nx = 691; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 691` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0872",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #693)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0873",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #694)?\nimport math\nprint(math.ceil(693 + 0.1))",
    "opts": [
      "694",
      "693",
      "693",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(693.1)` rounds up to `694`."
  },
  {
    "id": "py_fun_i_0874",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #695)?\nsq = lambda x: x ** 2 + 694\nprint(sq(3))",
    "opts": [
      "703",
      "9",
      "700",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 694 = 9 + 694 = `703`."
  },
  {
    "id": "py_ope_i_0875",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #696)?\nx = 695; print(x << 1)",
    "opts": [
      "1390",
      "347",
      "2780",
      "0"
    ],
    "ans": 0,
    "exp": "`695 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1390`)."
  },
  {
    "id": "py_dat_a_0876",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #697)?\nd = {'a': 696}; d.update({'a': 706, 'b': 716}); print(d['a'])",
    "opts": [
      "706",
      "696",
      "716",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `706`."
  },
  {
    "id": "py_con_a_0877",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #698)?\nval = 1; res = 'Yes' if (val and 697) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0878",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #699)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0879",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #700)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0880",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #701)?\ndef outer(x):\n    def inner(y):\n        return x * y + 700\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "708",
      "706",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 700 = `708`."
  },
  {
    "id": "py_ope_a_0881",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #702)?\na = 701; b = 706; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(701 < 706)` and `(706 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0882",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #703)?\nx = [1404, 1405, 1406]; print(x[0])",
    "opts": [
      "1404",
      "1409",
      "1403",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1404, 1405, 1406]` is `1404`."
  },
  {
    "id": "py_con_b_0883",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #704)?\na = 703; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "703 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0884",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #705)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0885",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #706)?\nimport math\nprint(math.floor(705 + 0.7))",
    "opts": [
      "705",
      "706",
      "706",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(705.7)` rounds down to `705`."
  },
  {
    "id": "py_fun_b_0886",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #707)?\ndef add_num(a, b=706):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "711",
      "706",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=706`, returning 5 + 706 = `711`."
  },
  {
    "id": "py_ope_b_0887",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #708)?\na = 717; b = 3; print(a % b)",
    "opts": [
      "0",
      "239",
      "717",
      "0"
    ],
    "ans": 0,
    "exp": "717 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0888",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #709)?\ns = 'python_programming_708'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "708",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '708'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0889",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #710)?\nx = 709; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 709` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0890",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #711)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0891",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #712)?\nimport math\nprint(math.ceil(711 + 0.1))",
    "opts": [
      "712",
      "711",
      "711",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(711.1)` rounds up to `712`."
  },
  {
    "id": "py_fun_i_0892",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #713)?\nsq = lambda x: x ** 2 + 712\nprint(sq(3))",
    "opts": [
      "721",
      "9",
      "718",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 712 = 9 + 712 = `721`."
  },
  {
    "id": "py_ope_i_0893",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #714)?\nx = 713; print(x << 1)",
    "opts": [
      "1426",
      "356",
      "2852",
      "0"
    ],
    "ans": 0,
    "exp": "`713 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1426`)."
  },
  {
    "id": "py_dat_a_0894",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #715)?\nd = {'a': 714}; d.update({'a': 724, 'b': 734}); print(d['a'])",
    "opts": [
      "724",
      "714",
      "734",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `724`."
  },
  {
    "id": "py_con_a_0895",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #716)?\nval = 1; res = 'Yes' if (val and 715) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0896",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #717)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0897",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #718)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0898",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #719)?\ndef outer(x):\n    def inner(y):\n        return x * y + 718\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "726",
      "724",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 718 = `726`."
  },
  {
    "id": "py_ope_a_0899",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #720)?\na = 719; b = 724; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(719 < 724)` and `(724 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0900",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #721)?\nx = [1440, 1441, 1442]; print(x[0])",
    "opts": [
      "1440",
      "1445",
      "1439",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1440, 1441, 1442]` is `1440`."
  },
  {
    "id": "py_con_b_0901",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #722)?\na = 721; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "721 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0902",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #723)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0903",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #724)?\nimport math\nprint(math.floor(723 + 0.7))",
    "opts": [
      "723",
      "724",
      "724",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(723.7)` rounds down to `723`."
  },
  {
    "id": "py_fun_b_0904",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #725)?\ndef add_num(a, b=724):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "729",
      "724",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=724`, returning 5 + 724 = `729`."
  },
  {
    "id": "py_ope_b_0905",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #726)?\na = 735; b = 3; print(a % b)",
    "opts": [
      "0",
      "245",
      "735",
      "0"
    ],
    "ans": 0,
    "exp": "735 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0906",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #727)?\ns = 'python_programming_726'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "726",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '726'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0907",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #728)?\nx = 727; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 727` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0908",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #729)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0909",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #730)?\nimport math\nprint(math.ceil(729 + 0.1))",
    "opts": [
      "730",
      "729",
      "729",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(729.1)` rounds up to `730`."
  },
  {
    "id": "py_fun_i_0910",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #731)?\nsq = lambda x: x ** 2 + 730\nprint(sq(3))",
    "opts": [
      "739",
      "9",
      "736",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 730 = 9 + 730 = `739`."
  },
  {
    "id": "py_ope_i_0911",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #732)?\nx = 731; print(x << 1)",
    "opts": [
      "1462",
      "365",
      "2924",
      "0"
    ],
    "ans": 0,
    "exp": "`731 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1462`)."
  },
  {
    "id": "py_dat_a_0912",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #733)?\nd = {'a': 732}; d.update({'a': 742, 'b': 752}); print(d['a'])",
    "opts": [
      "742",
      "732",
      "752",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `742`."
  },
  {
    "id": "py_con_a_0913",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #734)?\nval = 1; res = 'Yes' if (val and 733) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0914",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #735)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0915",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #736)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0916",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #737)?\ndef outer(x):\n    def inner(y):\n        return x * y + 736\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "744",
      "742",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 736 = `744`."
  },
  {
    "id": "py_ope_a_0917",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #738)?\na = 737; b = 742; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(737 < 742)` and `(742 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0918",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #739)?\nx = [1476, 1477, 1478]; print(x[0])",
    "opts": [
      "1476",
      "1481",
      "1475",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1476, 1477, 1478]` is `1476`."
  },
  {
    "id": "py_con_b_0919",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #740)?\na = 739; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "739 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0920",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #741)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_0921",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #742)?\nimport math\nprint(math.floor(741 + 0.7))",
    "opts": [
      "741",
      "742",
      "742",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(741.7)` rounds down to `741`."
  },
  {
    "id": "py_fun_b_0922",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #743)?\ndef add_num(a, b=742):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "747",
      "742",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=742`, returning 5 + 742 = `747`."
  },
  {
    "id": "py_ope_b_0923",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #744)?\na = 753; b = 3; print(a % b)",
    "opts": [
      "0",
      "251",
      "753",
      "0"
    ],
    "ans": 0,
    "exp": "753 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0924",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #745)?\ns = 'python_programming_744'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "744",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '744'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0925",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #746)?\nx = 745; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 745` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0926",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #747)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0927",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #748)?\nimport math\nprint(math.ceil(747 + 0.1))",
    "opts": [
      "748",
      "747",
      "747",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(747.1)` rounds up to `748`."
  },
  {
    "id": "py_fun_i_0928",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #749)?\nsq = lambda x: x ** 2 + 748\nprint(sq(3))",
    "opts": [
      "757",
      "9",
      "754",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 748 = 9 + 748 = `757`."
  },
  {
    "id": "py_ope_i_0929",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #750)?\nx = 749; print(x << 1)",
    "opts": [
      "1498",
      "374",
      "2996",
      "0"
    ],
    "ans": 0,
    "exp": "`749 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1498`)."
  },
  {
    "id": "py_dat_a_0930",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #751)?\nd = {'a': 750}; d.update({'a': 760, 'b': 770}); print(d['a'])",
    "opts": [
      "760",
      "750",
      "770",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `760`."
  },
  {
    "id": "py_con_a_0931",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #752)?\nval = 1; res = 'Yes' if (val and 751) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0932",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #753)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0933",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #754)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0934",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #755)?\ndef outer(x):\n    def inner(y):\n        return x * y + 754\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "762",
      "760",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 754 = `762`."
  },
  {
    "id": "py_ope_a_0935",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #756)?\na = 755; b = 760; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(755 < 760)` and `(760 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0936",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #757)?\nx = [1512, 1513, 1514]; print(x[0])",
    "opts": [
      "1512",
      "1517",
      "1511",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1512, 1513, 1514]` is `1512`."
  },
  {
    "id": "py_con_b_0937",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #758)?\na = 757; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "757 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0938",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #759)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_0939",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #760)?\nimport math\nprint(math.floor(759 + 0.7))",
    "opts": [
      "759",
      "760",
      "760",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(759.7)` rounds down to `759`."
  },
  {
    "id": "py_fun_b_0940",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #761)?\ndef add_num(a, b=760):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "765",
      "760",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=760`, returning 5 + 760 = `765`."
  },
  {
    "id": "py_ope_b_0941",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #762)?\na = 771; b = 3; print(a % b)",
    "opts": [
      "0",
      "257",
      "771",
      "0"
    ],
    "ans": 0,
    "exp": "771 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0942",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #763)?\ns = 'python_programming_762'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "762",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '762'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0943",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #764)?\nx = 763; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 763` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0944",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #765)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0945",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #766)?\nimport math\nprint(math.ceil(765 + 0.1))",
    "opts": [
      "766",
      "765",
      "765",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(765.1)` rounds up to `766`."
  },
  {
    "id": "py_fun_i_0946",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #767)?\nsq = lambda x: x ** 2 + 766\nprint(sq(3))",
    "opts": [
      "775",
      "9",
      "772",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 766 = 9 + 766 = `775`."
  },
  {
    "id": "py_ope_i_0947",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #768)?\nx = 767; print(x << 1)",
    "opts": [
      "1534",
      "383",
      "3068",
      "0"
    ],
    "ans": 0,
    "exp": "`767 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1534`)."
  },
  {
    "id": "py_dat_a_0948",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #769)?\nd = {'a': 768}; d.update({'a': 778, 'b': 788}); print(d['a'])",
    "opts": [
      "778",
      "768",
      "788",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `778`."
  },
  {
    "id": "py_con_a_0949",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #770)?\nval = 1; res = 'Yes' if (val and 769) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0950",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #771)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0951",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #772)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0952",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #773)?\ndef outer(x):\n    def inner(y):\n        return x * y + 772\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "780",
      "778",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 772 = `780`."
  },
  {
    "id": "py_ope_a_0953",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #774)?\na = 773; b = 778; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(773 < 778)` and `(778 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0954",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #775)?\nx = [1548, 1549, 1550]; print(x[0])",
    "opts": [
      "1548",
      "1553",
      "1547",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1548, 1549, 1550]` is `1548`."
  },
  {
    "id": "py_con_b_0955",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #776)?\na = 775; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "775 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0956",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #777)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_0957",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #778)?\nimport math\nprint(math.floor(777 + 0.7))",
    "opts": [
      "777",
      "778",
      "778",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(777.7)` rounds down to `777`."
  },
  {
    "id": "py_fun_b_0958",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #779)?\ndef add_num(a, b=778):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "783",
      "778",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=778`, returning 5 + 778 = `783`."
  },
  {
    "id": "py_ope_b_0959",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #780)?\na = 789; b = 3; print(a % b)",
    "opts": [
      "0",
      "263",
      "789",
      "0"
    ],
    "ans": 0,
    "exp": "789 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0960",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #781)?\ns = 'python_programming_780'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "780",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '780'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0961",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #782)?\nx = 781; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 781` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0962",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #783)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0963",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #784)?\nimport math\nprint(math.ceil(783 + 0.1))",
    "opts": [
      "784",
      "783",
      "783",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(783.1)` rounds up to `784`."
  },
  {
    "id": "py_fun_i_0964",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #785)?\nsq = lambda x: x ** 2 + 784\nprint(sq(3))",
    "opts": [
      "793",
      "9",
      "790",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 784 = 9 + 784 = `793`."
  },
  {
    "id": "py_ope_i_0965",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #786)?\nx = 785; print(x << 1)",
    "opts": [
      "1570",
      "392",
      "3140",
      "0"
    ],
    "ans": 0,
    "exp": "`785 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1570`)."
  },
  {
    "id": "py_dat_a_0966",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #787)?\nd = {'a': 786}; d.update({'a': 796, 'b': 806}); print(d['a'])",
    "opts": [
      "796",
      "786",
      "806",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `796`."
  },
  {
    "id": "py_con_a_0967",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #788)?\nval = 1; res = 'Yes' if (val and 787) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0968",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #789)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_0969",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #790)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_0970",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #791)?\ndef outer(x):\n    def inner(y):\n        return x * y + 790\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "798",
      "796",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 790 = `798`."
  },
  {
    "id": "py_ope_a_0971",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #792)?\na = 791; b = 796; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(791 < 796)` and `(796 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0972",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #793)?\nx = [1584, 1585, 1586]; print(x[0])",
    "opts": [
      "1584",
      "1589",
      "1583",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1584, 1585, 1586]` is `1584`."
  },
  {
    "id": "py_con_b_0973",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #794)?\na = 793; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "793 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0974",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #795)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_0975",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #796)?\nimport math\nprint(math.floor(795 + 0.7))",
    "opts": [
      "795",
      "796",
      "796",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(795.7)` rounds down to `795`."
  },
  {
    "id": "py_fun_b_0976",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #797)?\ndef add_num(a, b=796):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "801",
      "796",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=796`, returning 5 + 796 = `801`."
  },
  {
    "id": "py_ope_b_0977",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #798)?\na = 807; b = 3; print(a % b)",
    "opts": [
      "0",
      "269",
      "807",
      "0"
    ],
    "ans": 0,
    "exp": "807 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0978",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #799)?\ns = 'python_programming_798'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "798",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '798'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0979",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #800)?\nx = 799; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 799` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0980",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #801)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0981",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #802)?\nimport math\nprint(math.ceil(801 + 0.1))",
    "opts": [
      "802",
      "801",
      "801",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(801.1)` rounds up to `802`."
  },
  {
    "id": "py_fun_i_0982",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #803)?\nsq = lambda x: x ** 2 + 802\nprint(sq(3))",
    "opts": [
      "811",
      "9",
      "808",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 802 = 9 + 802 = `811`."
  },
  {
    "id": "py_ope_i_0983",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #804)?\nx = 803; print(x << 1)",
    "opts": [
      "1606",
      "401",
      "3212",
      "0"
    ],
    "ans": 0,
    "exp": "`803 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1606`)."
  },
  {
    "id": "py_dat_a_0984",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #805)?\nd = {'a': 804}; d.update({'a': 814, 'b': 824}); print(d['a'])",
    "opts": [
      "814",
      "804",
      "824",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `814`."
  },
  {
    "id": "py_con_a_0985",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #806)?\nval = 1; res = 'Yes' if (val and 805) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_0986",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #807)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_0987",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #808)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_0988",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #809)?\ndef outer(x):\n    def inner(y):\n        return x * y + 808\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "816",
      "814",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 808 = `816`."
  },
  {
    "id": "py_ope_a_0989",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #810)?\na = 809; b = 814; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(809 < 814)` and `(814 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_0990",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #811)?\nx = [1620, 1621, 1622]; print(x[0])",
    "opts": [
      "1620",
      "1625",
      "1619",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1620, 1621, 1622]` is `1620`."
  },
  {
    "id": "py_con_b_0991",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #812)?\na = 811; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "811 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_0992",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #813)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_0993",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #814)?\nimport math\nprint(math.floor(813 + 0.7))",
    "opts": [
      "813",
      "814",
      "814",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(813.7)` rounds down to `813`."
  },
  {
    "id": "py_fun_b_0994",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #815)?\ndef add_num(a, b=814):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "819",
      "814",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=814`, returning 5 + 814 = `819`."
  },
  {
    "id": "py_ope_b_0995",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #816)?\na = 825; b = 3; print(a % b)",
    "opts": [
      "0",
      "275",
      "825",
      "0"
    ],
    "ans": 0,
    "exp": "825 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_0996",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #817)?\ns = 'python_programming_816'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "816",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '816'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_0997",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #818)?\nx = 817; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 817` evaluates to `A`."
  },
  {
    "id": "py_loo_i_0998",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #819)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_0999",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #820)?\nimport math\nprint(math.ceil(819 + 0.1))",
    "opts": [
      "820",
      "819",
      "819",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(819.1)` rounds up to `820`."
  },
  {
    "id": "py_fun_i_1000",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #821)?\nsq = lambda x: x ** 2 + 820\nprint(sq(3))",
    "opts": [
      "829",
      "9",
      "826",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 820 = 9 + 820 = `829`."
  },
  {
    "id": "py_ope_i_1001",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #822)?\nx = 821; print(x << 1)",
    "opts": [
      "1642",
      "410",
      "3284",
      "0"
    ],
    "ans": 0,
    "exp": "`821 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1642`)."
  },
  {
    "id": "py_dat_a_1002",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #823)?\nd = {'a': 822}; d.update({'a': 832, 'b': 842}); print(d['a'])",
    "opts": [
      "832",
      "822",
      "842",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `832`."
  },
  {
    "id": "py_con_a_1003",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #824)?\nval = 1; res = 'Yes' if (val and 823) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1004",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #825)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1005",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #826)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1006",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #827)?\ndef outer(x):\n    def inner(y):\n        return x * y + 826\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "834",
      "832",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 826 = `834`."
  },
  {
    "id": "py_ope_a_1007",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #828)?\na = 827; b = 832; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(827 < 832)` and `(832 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1008",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #829)?\nx = [1656, 1657, 1658]; print(x[0])",
    "opts": [
      "1656",
      "1661",
      "1655",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1656, 1657, 1658]` is `1656`."
  },
  {
    "id": "py_con_b_1009",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #830)?\na = 829; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "829 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1010",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #831)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_1011",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #832)?\nimport math\nprint(math.floor(831 + 0.7))",
    "opts": [
      "831",
      "832",
      "832",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(831.7)` rounds down to `831`."
  },
  {
    "id": "py_fun_b_1012",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #833)?\ndef add_num(a, b=832):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "837",
      "832",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=832`, returning 5 + 832 = `837`."
  },
  {
    "id": "py_ope_b_1013",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #834)?\na = 843; b = 3; print(a % b)",
    "opts": [
      "0",
      "281",
      "843",
      "0"
    ],
    "ans": 0,
    "exp": "843 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1014",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #835)?\ns = 'python_programming_834'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "834",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '834'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1015",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #836)?\nx = 835; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 835` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1016",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #837)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1017",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #838)?\nimport math\nprint(math.ceil(837 + 0.1))",
    "opts": [
      "838",
      "837",
      "837",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(837.1)` rounds up to `838`."
  },
  {
    "id": "py_fun_i_1018",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #839)?\nsq = lambda x: x ** 2 + 838\nprint(sq(3))",
    "opts": [
      "847",
      "9",
      "844",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 838 = 9 + 838 = `847`."
  },
  {
    "id": "py_ope_i_1019",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #840)?\nx = 839; print(x << 1)",
    "opts": [
      "1678",
      "419",
      "3356",
      "0"
    ],
    "ans": 0,
    "exp": "`839 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1678`)."
  },
  {
    "id": "py_dat_a_1020",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #841)?\nd = {'a': 840}; d.update({'a': 850, 'b': 860}); print(d['a'])",
    "opts": [
      "850",
      "840",
      "860",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `850`."
  },
  {
    "id": "py_con_a_1021",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #842)?\nval = 1; res = 'Yes' if (val and 841) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1022",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #843)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1023",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #844)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1024",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #845)?\ndef outer(x):\n    def inner(y):\n        return x * y + 844\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "852",
      "850",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 844 = `852`."
  },
  {
    "id": "py_ope_a_1025",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #846)?\na = 845; b = 850; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(845 < 850)` and `(850 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1026",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #847)?\nx = [1692, 1693, 1694]; print(x[0])",
    "opts": [
      "1692",
      "1697",
      "1691",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1692, 1693, 1694]` is `1692`."
  },
  {
    "id": "py_con_b_1027",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #848)?\na = 847; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "847 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1028",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #849)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_1029",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #850)?\nimport math\nprint(math.floor(849 + 0.7))",
    "opts": [
      "849",
      "850",
      "850",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(849.7)` rounds down to `849`."
  },
  {
    "id": "py_fun_b_1030",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #851)?\ndef add_num(a, b=850):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "855",
      "850",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=850`, returning 5 + 850 = `855`."
  },
  {
    "id": "py_ope_b_1031",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #852)?\na = 861; b = 3; print(a % b)",
    "opts": [
      "0",
      "287",
      "861",
      "0"
    ],
    "ans": 0,
    "exp": "861 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1032",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #853)?\ns = 'python_programming_852'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "852",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '852'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1033",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #854)?\nx = 853; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 853` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1034",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #855)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1035",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #856)?\nimport math\nprint(math.ceil(855 + 0.1))",
    "opts": [
      "856",
      "855",
      "855",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(855.1)` rounds up to `856`."
  },
  {
    "id": "py_fun_i_1036",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #857)?\nsq = lambda x: x ** 2 + 856\nprint(sq(3))",
    "opts": [
      "865",
      "9",
      "862",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 856 = 9 + 856 = `865`."
  },
  {
    "id": "py_ope_i_1037",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #858)?\nx = 857; print(x << 1)",
    "opts": [
      "1714",
      "428",
      "3428",
      "0"
    ],
    "ans": 0,
    "exp": "`857 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1714`)."
  },
  {
    "id": "py_dat_a_1038",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #859)?\nd = {'a': 858}; d.update({'a': 868, 'b': 878}); print(d['a'])",
    "opts": [
      "868",
      "858",
      "878",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `868`."
  },
  {
    "id": "py_con_a_1039",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #860)?\nval = 1; res = 'Yes' if (val and 859) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1040",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #861)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1041",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #862)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1042",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #863)?\ndef outer(x):\n    def inner(y):\n        return x * y + 862\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "870",
      "868",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 862 = `870`."
  },
  {
    "id": "py_ope_a_1043",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #864)?\na = 863; b = 868; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(863 < 868)` and `(868 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1044",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #865)?\nx = [1728, 1729, 1730]; print(x[0])",
    "opts": [
      "1728",
      "1733",
      "1727",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1728, 1729, 1730]` is `1728`."
  },
  {
    "id": "py_con_b_1045",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #866)?\na = 865; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "865 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1046",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #867)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_1047",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #868)?\nimport math\nprint(math.floor(867 + 0.7))",
    "opts": [
      "867",
      "868",
      "868",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(867.7)` rounds down to `867`."
  },
  {
    "id": "py_fun_b_1048",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #869)?\ndef add_num(a, b=868):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "873",
      "868",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=868`, returning 5 + 868 = `873`."
  },
  {
    "id": "py_ope_b_1049",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #870)?\na = 879; b = 3; print(a % b)",
    "opts": [
      "0",
      "293",
      "879",
      "0"
    ],
    "ans": 0,
    "exp": "879 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1050",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #871)?\ns = 'python_programming_870'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "870",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '870'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1051",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #872)?\nx = 871; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 871` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1052",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #873)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1053",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #874)?\nimport math\nprint(math.ceil(873 + 0.1))",
    "opts": [
      "874",
      "873",
      "873",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(873.1)` rounds up to `874`."
  },
  {
    "id": "py_fun_i_1054",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #875)?\nsq = lambda x: x ** 2 + 874\nprint(sq(3))",
    "opts": [
      "883",
      "9",
      "880",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 874 = 9 + 874 = `883`."
  },
  {
    "id": "py_ope_i_1055",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #876)?\nx = 875; print(x << 1)",
    "opts": [
      "1750",
      "437",
      "3500",
      "0"
    ],
    "ans": 0,
    "exp": "`875 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1750`)."
  },
  {
    "id": "py_dat_a_1056",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #877)?\nd = {'a': 876}; d.update({'a': 886, 'b': 896}); print(d['a'])",
    "opts": [
      "886",
      "876",
      "896",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `886`."
  },
  {
    "id": "py_con_a_1057",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #878)?\nval = 1; res = 'Yes' if (val and 877) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1058",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #879)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1059",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #880)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1060",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #881)?\ndef outer(x):\n    def inner(y):\n        return x * y + 880\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "888",
      "886",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 880 = `888`."
  },
  {
    "id": "py_ope_a_1061",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #882)?\na = 881; b = 886; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(881 < 886)` and `(886 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1062",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #883)?\nx = [1764, 1765, 1766]; print(x[0])",
    "opts": [
      "1764",
      "1769",
      "1763",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1764, 1765, 1766]` is `1764`."
  },
  {
    "id": "py_con_b_1063",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #884)?\na = 883; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "883 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1064",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #885)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_1065",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #886)?\nimport math\nprint(math.floor(885 + 0.7))",
    "opts": [
      "885",
      "886",
      "886",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(885.7)` rounds down to `885`."
  },
  {
    "id": "py_fun_b_1066",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #887)?\ndef add_num(a, b=886):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "891",
      "886",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=886`, returning 5 + 886 = `891`."
  },
  {
    "id": "py_ope_b_1067",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #888)?\na = 897; b = 3; print(a % b)",
    "opts": [
      "0",
      "299",
      "897",
      "0"
    ],
    "ans": 0,
    "exp": "897 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1068",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #889)?\ns = 'python_programming_888'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "888",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '888'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1069",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #890)?\nx = 889; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 889` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1070",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #891)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1071",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #892)?\nimport math\nprint(math.ceil(891 + 0.1))",
    "opts": [
      "892",
      "891",
      "891",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(891.1)` rounds up to `892`."
  },
  {
    "id": "py_fun_i_1072",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #893)?\nsq = lambda x: x ** 2 + 892\nprint(sq(3))",
    "opts": [
      "901",
      "9",
      "898",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 892 = 9 + 892 = `901`."
  },
  {
    "id": "py_ope_i_1073",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #894)?\nx = 893; print(x << 1)",
    "opts": [
      "1786",
      "446",
      "3572",
      "0"
    ],
    "ans": 0,
    "exp": "`893 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1786`)."
  },
  {
    "id": "py_dat_a_1074",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #895)?\nd = {'a': 894}; d.update({'a': 904, 'b': 914}); print(d['a'])",
    "opts": [
      "904",
      "894",
      "914",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `904`."
  },
  {
    "id": "py_con_a_1075",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #896)?\nval = 1; res = 'Yes' if (val and 895) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1076",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #897)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1077",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #898)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1078",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #899)?\ndef outer(x):\n    def inner(y):\n        return x * y + 898\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "906",
      "904",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 898 = `906`."
  },
  {
    "id": "py_ope_a_1079",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #900)?\na = 899; b = 904; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(899 < 904)` and `(904 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1080",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #901)?\nx = [1800, 1801, 1802]; print(x[0])",
    "opts": [
      "1800",
      "1805",
      "1799",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1800, 1801, 1802]` is `1800`."
  },
  {
    "id": "py_con_b_1081",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #902)?\na = 901; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "901 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1082",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #903)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_1083",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #904)?\nimport math\nprint(math.floor(903 + 0.7))",
    "opts": [
      "903",
      "904",
      "904",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(903.7)` rounds down to `903`."
  },
  {
    "id": "py_fun_b_1084",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #905)?\ndef add_num(a, b=904):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "909",
      "904",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=904`, returning 5 + 904 = `909`."
  },
  {
    "id": "py_ope_b_1085",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #906)?\na = 915; b = 3; print(a % b)",
    "opts": [
      "0",
      "305",
      "915",
      "0"
    ],
    "ans": 0,
    "exp": "915 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1086",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #907)?\ns = 'python_programming_906'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "906",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '906'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1087",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #908)?\nx = 907; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 907` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1088",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #909)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1089",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #910)?\nimport math\nprint(math.ceil(909 + 0.1))",
    "opts": [
      "910",
      "909",
      "909",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(909.1)` rounds up to `910`."
  },
  {
    "id": "py_fun_i_1090",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #911)?\nsq = lambda x: x ** 2 + 910\nprint(sq(3))",
    "opts": [
      "919",
      "9",
      "916",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 910 = 9 + 910 = `919`."
  },
  {
    "id": "py_ope_i_1091",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #912)?\nx = 911; print(x << 1)",
    "opts": [
      "1822",
      "455",
      "3644",
      "0"
    ],
    "ans": 0,
    "exp": "`911 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1822`)."
  },
  {
    "id": "py_dat_a_1092",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #913)?\nd = {'a': 912}; d.update({'a': 922, 'b': 932}); print(d['a'])",
    "opts": [
      "922",
      "912",
      "932",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `922`."
  },
  {
    "id": "py_con_a_1093",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #914)?\nval = 1; res = 'Yes' if (val and 913) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1094",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #915)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1095",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #916)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1096",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #917)?\ndef outer(x):\n    def inner(y):\n        return x * y + 916\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "924",
      "922",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 916 = `924`."
  },
  {
    "id": "py_ope_a_1097",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #918)?\na = 917; b = 922; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(917 < 922)` and `(922 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1098",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #919)?\nx = [1836, 1837, 1838]; print(x[0])",
    "opts": [
      "1836",
      "1841",
      "1835",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1836, 1837, 1838]` is `1836`."
  },
  {
    "id": "py_con_b_1099",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #920)?\na = 919; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "919 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1100",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #921)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_1101",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #922)?\nimport math\nprint(math.floor(921 + 0.7))",
    "opts": [
      "921",
      "922",
      "922",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(921.7)` rounds down to `921`."
  },
  {
    "id": "py_fun_b_1102",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #923)?\ndef add_num(a, b=922):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "927",
      "922",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=922`, returning 5 + 922 = `927`."
  },
  {
    "id": "py_ope_b_1103",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #924)?\na = 933; b = 3; print(a % b)",
    "opts": [
      "0",
      "311",
      "933",
      "0"
    ],
    "ans": 0,
    "exp": "933 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1104",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #925)?\ns = 'python_programming_924'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "924",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '924'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1105",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #926)?\nx = 925; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 925` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1106",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #927)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1107",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #928)?\nimport math\nprint(math.ceil(927 + 0.1))",
    "opts": [
      "928",
      "927",
      "927",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(927.1)` rounds up to `928`."
  },
  {
    "id": "py_fun_i_1108",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #929)?\nsq = lambda x: x ** 2 + 928\nprint(sq(3))",
    "opts": [
      "937",
      "9",
      "934",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 928 = 9 + 928 = `937`."
  },
  {
    "id": "py_ope_i_1109",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #930)?\nx = 929; print(x << 1)",
    "opts": [
      "1858",
      "464",
      "3716",
      "0"
    ],
    "ans": 0,
    "exp": "`929 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1858`)."
  },
  {
    "id": "py_dat_a_1110",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #931)?\nd = {'a': 930}; d.update({'a': 940, 'b': 950}); print(d['a'])",
    "opts": [
      "940",
      "930",
      "950",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `940`."
  },
  {
    "id": "py_con_a_1111",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #932)?\nval = 1; res = 'Yes' if (val and 931) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1112",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #933)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1113",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #934)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1114",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #935)?\ndef outer(x):\n    def inner(y):\n        return x * y + 934\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "942",
      "940",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 934 = `942`."
  },
  {
    "id": "py_ope_a_1115",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #936)?\na = 935; b = 940; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(935 < 940)` and `(940 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1116",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #937)?\nx = [1872, 1873, 1874]; print(x[0])",
    "opts": [
      "1872",
      "1877",
      "1871",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1872, 1873, 1874]` is `1872`."
  },
  {
    "id": "py_con_b_1117",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #938)?\na = 937; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "937 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1118",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #939)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_1119",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #940)?\nimport math\nprint(math.floor(939 + 0.7))",
    "opts": [
      "939",
      "940",
      "940",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(939.7)` rounds down to `939`."
  },
  {
    "id": "py_fun_b_1120",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #941)?\ndef add_num(a, b=940):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "945",
      "940",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=940`, returning 5 + 940 = `945`."
  },
  {
    "id": "py_ope_b_1121",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #942)?\na = 951; b = 3; print(a % b)",
    "opts": [
      "0",
      "317",
      "951",
      "0"
    ],
    "ans": 0,
    "exp": "951 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1122",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #943)?\ns = 'python_programming_942'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "942",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '942'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1123",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #944)?\nx = 943; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 943` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1124",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #945)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1125",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #946)?\nimport math\nprint(math.ceil(945 + 0.1))",
    "opts": [
      "946",
      "945",
      "945",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(945.1)` rounds up to `946`."
  },
  {
    "id": "py_fun_i_1126",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #947)?\nsq = lambda x: x ** 2 + 946\nprint(sq(3))",
    "opts": [
      "955",
      "9",
      "952",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 946 = 9 + 946 = `955`."
  },
  {
    "id": "py_ope_i_1127",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #948)?\nx = 947; print(x << 1)",
    "opts": [
      "1894",
      "473",
      "3788",
      "0"
    ],
    "ans": 0,
    "exp": "`947 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1894`)."
  },
  {
    "id": "py_dat_a_1128",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #949)?\nd = {'a': 948}; d.update({'a': 958, 'b': 968}); print(d['a'])",
    "opts": [
      "958",
      "948",
      "968",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `958`."
  },
  {
    "id": "py_con_a_1129",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #950)?\nval = 1; res = 'Yes' if (val and 949) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1130",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #951)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1131",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #952)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1132",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #953)?\ndef outer(x):\n    def inner(y):\n        return x * y + 952\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "960",
      "958",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 952 = `960`."
  },
  {
    "id": "py_ope_a_1133",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #954)?\na = 953; b = 958; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(953 < 958)` and `(958 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1134",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #955)?\nx = [1908, 1909, 1910]; print(x[0])",
    "opts": [
      "1908",
      "1913",
      "1907",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1908, 1909, 1910]` is `1908`."
  },
  {
    "id": "py_con_b_1135",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #956)?\na = 955; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "955 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1136",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #957)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_1137",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #958)?\nimport math\nprint(math.floor(957 + 0.7))",
    "opts": [
      "957",
      "958",
      "958",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(957.7)` rounds down to `957`."
  },
  {
    "id": "py_fun_b_1138",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #959)?\ndef add_num(a, b=958):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "963",
      "958",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=958`, returning 5 + 958 = `963`."
  },
  {
    "id": "py_ope_b_1139",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #960)?\na = 969; b = 3; print(a % b)",
    "opts": [
      "0",
      "323",
      "969",
      "0"
    ],
    "ans": 0,
    "exp": "969 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1140",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #961)?\ns = 'python_programming_960'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "960",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '960'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1141",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #962)?\nx = 961; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 961` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1142",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #963)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1143",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #964)?\nimport math\nprint(math.ceil(963 + 0.1))",
    "opts": [
      "964",
      "963",
      "963",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(963.1)` rounds up to `964`."
  },
  {
    "id": "py_fun_i_1144",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #965)?\nsq = lambda x: x ** 2 + 964\nprint(sq(3))",
    "opts": [
      "973",
      "9",
      "970",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 964 = 9 + 964 = `973`."
  },
  {
    "id": "py_ope_i_1145",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #966)?\nx = 965; print(x << 1)",
    "opts": [
      "1930",
      "482",
      "3860",
      "0"
    ],
    "ans": 0,
    "exp": "`965 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1930`)."
  },
  {
    "id": "py_dat_a_1146",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #967)?\nd = {'a': 966}; d.update({'a': 976, 'b': 986}); print(d['a'])",
    "opts": [
      "976",
      "966",
      "986",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `976`."
  },
  {
    "id": "py_con_a_1147",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #968)?\nval = 1; res = 'Yes' if (val and 967) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1148",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #969)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1149",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #970)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1150",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #971)?\ndef outer(x):\n    def inner(y):\n        return x * y + 970\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "978",
      "976",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 970 = `978`."
  },
  {
    "id": "py_ope_a_1151",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #972)?\na = 971; b = 976; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(971 < 976)` and `(976 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1152",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #973)?\nx = [1944, 1945, 1946]; print(x[0])",
    "opts": [
      "1944",
      "1949",
      "1943",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1944, 1945, 1946]` is `1944`."
  },
  {
    "id": "py_con_b_1153",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #974)?\na = 973; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "973 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1154",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #975)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_1155",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #976)?\nimport math\nprint(math.floor(975 + 0.7))",
    "opts": [
      "975",
      "976",
      "976",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(975.7)` rounds down to `975`."
  },
  {
    "id": "py_fun_b_1156",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #977)?\ndef add_num(a, b=976):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "981",
      "976",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=976`, returning 5 + 976 = `981`."
  },
  {
    "id": "py_ope_b_1157",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #978)?\na = 987; b = 3; print(a % b)",
    "opts": [
      "0",
      "329",
      "987",
      "0"
    ],
    "ans": 0,
    "exp": "987 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1158",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #979)?\ns = 'python_programming_978'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "978",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '978'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1159",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #980)?\nx = 979; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 979` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1160",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #981)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1161",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #982)?\nimport math\nprint(math.ceil(981 + 0.1))",
    "opts": [
      "982",
      "981",
      "981",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(981.1)` rounds up to `982`."
  },
  {
    "id": "py_fun_i_1162",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #983)?\nsq = lambda x: x ** 2 + 982\nprint(sq(3))",
    "opts": [
      "991",
      "9",
      "988",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 982 = 9 + 982 = `991`."
  },
  {
    "id": "py_ope_i_1163",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #984)?\nx = 983; print(x << 1)",
    "opts": [
      "1966",
      "491",
      "3932",
      "0"
    ],
    "ans": 0,
    "exp": "`983 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`1966`)."
  },
  {
    "id": "py_dat_a_1164",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #985)?\nd = {'a': 984}; d.update({'a': 994, 'b': 1004}); print(d['a'])",
    "opts": [
      "994",
      "984",
      "1004",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `994`."
  },
  {
    "id": "py_con_a_1165",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #986)?\nval = 1; res = 'Yes' if (val and 985) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1166",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #987)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1167",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #988)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1168",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #989)?\ndef outer(x):\n    def inner(y):\n        return x * y + 988\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "996",
      "994",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 988 = `996`."
  },
  {
    "id": "py_ope_a_1169",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #990)?\na = 989; b = 994; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(989 < 994)` and `(994 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1170",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #991)?\nx = [1980, 1981, 1982]; print(x[0])",
    "opts": [
      "1980",
      "1985",
      "1979",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[1980, 1981, 1982]` is `1980`."
  },
  {
    "id": "py_con_b_1171",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #992)?\na = 991; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "991 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1172",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #993)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_1173",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #994)?\nimport math\nprint(math.floor(993 + 0.7))",
    "opts": [
      "993",
      "994",
      "994",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(993.7)` rounds down to `993`."
  },
  {
    "id": "py_fun_b_1174",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #995)?\ndef add_num(a, b=994):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "999",
      "994",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=994`, returning 5 + 994 = `999`."
  },
  {
    "id": "py_ope_b_1175",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #996)?\na = 1005; b = 3; print(a % b)",
    "opts": [
      "0",
      "335",
      "1005",
      "0"
    ],
    "ans": 0,
    "exp": "1005 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1176",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #997)?\ns = 'python_programming_996'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "996",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '996'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1177",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #998)?\nx = 997; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 997` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1178",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #999)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1179",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1000)?\nimport math\nprint(math.ceil(999 + 0.1))",
    "opts": [
      "1000",
      "999",
      "999",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(999.1)` rounds up to `1000`."
  },
  {
    "id": "py_fun_i_1180",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1001)?\nsq = lambda x: x ** 2 + 1000\nprint(sq(3))",
    "opts": [
      "1009",
      "9",
      "1006",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1000 = 9 + 1000 = `1009`."
  },
  {
    "id": "py_ope_i_1181",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1002)?\nx = 1001; print(x << 1)",
    "opts": [
      "2002",
      "500",
      "4004",
      "0"
    ],
    "ans": 0,
    "exp": "`1001 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2002`)."
  },
  {
    "id": "py_dat_a_1182",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1003)?\nd = {'a': 1002}; d.update({'a': 1012, 'b': 1022}); print(d['a'])",
    "opts": [
      "1012",
      "1002",
      "1022",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1012`."
  },
  {
    "id": "py_con_a_1183",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1004)?\nval = 1; res = 'Yes' if (val and 1003) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1184",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1005)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1185",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1006)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1186",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1007)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1006\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1014",
      "1012",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1006 = `1014`."
  },
  {
    "id": "py_ope_a_1187",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1008)?\na = 1007; b = 1012; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1007 < 1012)` and `(1012 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1188",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1009)?\nx = [2016, 2017, 2018]; print(x[0])",
    "opts": [
      "2016",
      "2021",
      "2015",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2016, 2017, 2018]` is `2016`."
  },
  {
    "id": "py_con_b_1189",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1010)?\na = 1009; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1009 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1190",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1011)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_1191",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1012)?\nimport math\nprint(math.floor(1011 + 0.7))",
    "opts": [
      "1011",
      "1012",
      "1012",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1011.7)` rounds down to `1011`."
  },
  {
    "id": "py_fun_b_1192",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1013)?\ndef add_num(a, b=1012):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1017",
      "1012",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1012`, returning 5 + 1012 = `1017`."
  },
  {
    "id": "py_ope_b_1193",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1014)?\na = 1023; b = 3; print(a % b)",
    "opts": [
      "0",
      "341",
      "1023",
      "0"
    ],
    "ans": 0,
    "exp": "1023 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1194",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1015)?\ns = 'python_programming_1014'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1014",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1014'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1195",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1016)?\nx = 1015; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1015` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1196",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1017)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1197",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1018)?\nimport math\nprint(math.ceil(1017 + 0.1))",
    "opts": [
      "1018",
      "1017",
      "1017",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1017.1)` rounds up to `1018`."
  },
  {
    "id": "py_fun_i_1198",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1019)?\nsq = lambda x: x ** 2 + 1018\nprint(sq(3))",
    "opts": [
      "1027",
      "9",
      "1024",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1018 = 9 + 1018 = `1027`."
  },
  {
    "id": "py_ope_i_1199",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1020)?\nx = 1019; print(x << 1)",
    "opts": [
      "2038",
      "509",
      "4076",
      "0"
    ],
    "ans": 0,
    "exp": "`1019 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2038`)."
  },
  {
    "id": "py_dat_a_1200",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1021)?\nd = {'a': 1020}; d.update({'a': 1030, 'b': 1040}); print(d['a'])",
    "opts": [
      "1030",
      "1020",
      "1040",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1030`."
  },
  {
    "id": "py_con_a_1201",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1022)?\nval = 1; res = 'Yes' if (val and 1021) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1202",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1023)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1203",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1024)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1204",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1025)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1024\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1032",
      "1030",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1024 = `1032`."
  },
  {
    "id": "py_ope_a_1205",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1026)?\na = 1025; b = 1030; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1025 < 1030)` and `(1030 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1206",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1027)?\nx = [2052, 2053, 2054]; print(x[0])",
    "opts": [
      "2052",
      "2057",
      "2051",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2052, 2053, 2054]` is `2052`."
  },
  {
    "id": "py_con_b_1207",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1028)?\na = 1027; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1027 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1208",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1029)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_1209",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1030)?\nimport math\nprint(math.floor(1029 + 0.7))",
    "opts": [
      "1029",
      "1030",
      "1030",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1029.7)` rounds down to `1029`."
  },
  {
    "id": "py_fun_b_1210",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1031)?\ndef add_num(a, b=1030):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1035",
      "1030",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1030`, returning 5 + 1030 = `1035`."
  },
  {
    "id": "py_ope_b_1211",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1032)?\na = 1041; b = 3; print(a % b)",
    "opts": [
      "0",
      "347",
      "1041",
      "0"
    ],
    "ans": 0,
    "exp": "1041 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1212",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1033)?\ns = 'python_programming_1032'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1032",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1032'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1213",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1034)?\nx = 1033; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1033` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1214",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1035)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1215",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1036)?\nimport math\nprint(math.ceil(1035 + 0.1))",
    "opts": [
      "1036",
      "1035",
      "1035",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1035.1)` rounds up to `1036`."
  },
  {
    "id": "py_fun_i_1216",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1037)?\nsq = lambda x: x ** 2 + 1036\nprint(sq(3))",
    "opts": [
      "1045",
      "9",
      "1042",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1036 = 9 + 1036 = `1045`."
  },
  {
    "id": "py_ope_i_1217",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1038)?\nx = 1037; print(x << 1)",
    "opts": [
      "2074",
      "518",
      "4148",
      "0"
    ],
    "ans": 0,
    "exp": "`1037 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2074`)."
  },
  {
    "id": "py_dat_a_1218",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1039)?\nd = {'a': 1038}; d.update({'a': 1048, 'b': 1058}); print(d['a'])",
    "opts": [
      "1048",
      "1038",
      "1058",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1048`."
  },
  {
    "id": "py_con_a_1219",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1040)?\nval = 1; res = 'Yes' if (val and 1039) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1220",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1041)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1221",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1042)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1222",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1043)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1042\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1050",
      "1048",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1042 = `1050`."
  },
  {
    "id": "py_ope_a_1223",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1044)?\na = 1043; b = 1048; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1043 < 1048)` and `(1048 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1224",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1045)?\nx = [2088, 2089, 2090]; print(x[0])",
    "opts": [
      "2088",
      "2093",
      "2087",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2088, 2089, 2090]` is `2088`."
  },
  {
    "id": "py_con_b_1225",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1046)?\na = 1045; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1045 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1226",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1047)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_1227",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1048)?\nimport math\nprint(math.floor(1047 + 0.7))",
    "opts": [
      "1047",
      "1048",
      "1048",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1047.7)` rounds down to `1047`."
  },
  {
    "id": "py_fun_b_1228",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1049)?\ndef add_num(a, b=1048):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1053",
      "1048",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1048`, returning 5 + 1048 = `1053`."
  },
  {
    "id": "py_ope_b_1229",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1050)?\na = 1059; b = 3; print(a % b)",
    "opts": [
      "0",
      "353",
      "1059",
      "0"
    ],
    "ans": 0,
    "exp": "1059 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1230",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1051)?\ns = 'python_programming_1050'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1050",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1050'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1231",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1052)?\nx = 1051; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1051` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1232",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1053)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1233",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1054)?\nimport math\nprint(math.ceil(1053 + 0.1))",
    "opts": [
      "1054",
      "1053",
      "1053",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1053.1)` rounds up to `1054`."
  },
  {
    "id": "py_fun_i_1234",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1055)?\nsq = lambda x: x ** 2 + 1054\nprint(sq(3))",
    "opts": [
      "1063",
      "9",
      "1060",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1054 = 9 + 1054 = `1063`."
  },
  {
    "id": "py_ope_i_1235",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1056)?\nx = 1055; print(x << 1)",
    "opts": [
      "2110",
      "527",
      "4220",
      "0"
    ],
    "ans": 0,
    "exp": "`1055 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2110`)."
  },
  {
    "id": "py_dat_a_1236",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1057)?\nd = {'a': 1056}; d.update({'a': 1066, 'b': 1076}); print(d['a'])",
    "opts": [
      "1066",
      "1056",
      "1076",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1066`."
  },
  {
    "id": "py_con_a_1237",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1058)?\nval = 1; res = 'Yes' if (val and 1057) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1238",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1059)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1239",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1060)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1240",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1061)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1060\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1068",
      "1066",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1060 = `1068`."
  },
  {
    "id": "py_ope_a_1241",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1062)?\na = 1061; b = 1066; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1061 < 1066)` and `(1066 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1242",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1063)?\nx = [2124, 2125, 2126]; print(x[0])",
    "opts": [
      "2124",
      "2129",
      "2123",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2124, 2125, 2126]` is `2124`."
  },
  {
    "id": "py_con_b_1243",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1064)?\na = 1063; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1063 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1244",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1065)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_1245",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1066)?\nimport math\nprint(math.floor(1065 + 0.7))",
    "opts": [
      "1065",
      "1066",
      "1066",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1065.7)` rounds down to `1065`."
  },
  {
    "id": "py_fun_b_1246",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1067)?\ndef add_num(a, b=1066):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1071",
      "1066",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1066`, returning 5 + 1066 = `1071`."
  },
  {
    "id": "py_ope_b_1247",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1068)?\na = 1077; b = 3; print(a % b)",
    "opts": [
      "0",
      "359",
      "1077",
      "0"
    ],
    "ans": 0,
    "exp": "1077 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1248",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1069)?\ns = 'python_programming_1068'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1068",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1068'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1249",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1070)?\nx = 1069; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1069` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1250",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1071)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1251",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1072)?\nimport math\nprint(math.ceil(1071 + 0.1))",
    "opts": [
      "1072",
      "1071",
      "1071",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1071.1)` rounds up to `1072`."
  },
  {
    "id": "py_fun_i_1252",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1073)?\nsq = lambda x: x ** 2 + 1072\nprint(sq(3))",
    "opts": [
      "1081",
      "9",
      "1078",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1072 = 9 + 1072 = `1081`."
  },
  {
    "id": "py_ope_i_1253",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1074)?\nx = 1073; print(x << 1)",
    "opts": [
      "2146",
      "536",
      "4292",
      "0"
    ],
    "ans": 0,
    "exp": "`1073 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2146`)."
  },
  {
    "id": "py_dat_a_1254",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1075)?\nd = {'a': 1074}; d.update({'a': 1084, 'b': 1094}); print(d['a'])",
    "opts": [
      "1084",
      "1074",
      "1094",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1084`."
  },
  {
    "id": "py_con_a_1255",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1076)?\nval = 1; res = 'Yes' if (val and 1075) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1256",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1077)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1257",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1078)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1258",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1079)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1078\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1086",
      "1084",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1078 = `1086`."
  },
  {
    "id": "py_ope_a_1259",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1080)?\na = 1079; b = 1084; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1079 < 1084)` and `(1084 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1260",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1081)?\nx = [2160, 2161, 2162]; print(x[0])",
    "opts": [
      "2160",
      "2165",
      "2159",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2160, 2161, 2162]` is `2160`."
  },
  {
    "id": "py_con_b_1261",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1082)?\na = 1081; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1081 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1262",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1083)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_1263",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1084)?\nimport math\nprint(math.floor(1083 + 0.7))",
    "opts": [
      "1083",
      "1084",
      "1084",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1083.7)` rounds down to `1083`."
  },
  {
    "id": "py_fun_b_1264",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1085)?\ndef add_num(a, b=1084):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1089",
      "1084",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1084`, returning 5 + 1084 = `1089`."
  },
  {
    "id": "py_ope_b_1265",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1086)?\na = 1095; b = 3; print(a % b)",
    "opts": [
      "0",
      "365",
      "1095",
      "0"
    ],
    "ans": 0,
    "exp": "1095 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1266",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1087)?\ns = 'python_programming_1086'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1086",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1086'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1267",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1088)?\nx = 1087; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1087` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1268",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1089)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1269",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1090)?\nimport math\nprint(math.ceil(1089 + 0.1))",
    "opts": [
      "1090",
      "1089",
      "1089",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1089.1)` rounds up to `1090`."
  },
  {
    "id": "py_fun_i_1270",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1091)?\nsq = lambda x: x ** 2 + 1090\nprint(sq(3))",
    "opts": [
      "1099",
      "9",
      "1096",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1090 = 9 + 1090 = `1099`."
  },
  {
    "id": "py_ope_i_1271",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1092)?\nx = 1091; print(x << 1)",
    "opts": [
      "2182",
      "545",
      "4364",
      "0"
    ],
    "ans": 0,
    "exp": "`1091 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2182`)."
  },
  {
    "id": "py_dat_a_1272",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1093)?\nd = {'a': 1092}; d.update({'a': 1102, 'b': 1112}); print(d['a'])",
    "opts": [
      "1102",
      "1092",
      "1112",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1102`."
  },
  {
    "id": "py_con_a_1273",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1094)?\nval = 1; res = 'Yes' if (val and 1093) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1274",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1095)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1275",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1096)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1276",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1097)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1096\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1104",
      "1102",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1096 = `1104`."
  },
  {
    "id": "py_ope_a_1277",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1098)?\na = 1097; b = 1102; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1097 < 1102)` and `(1102 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1278",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1099)?\nx = [2196, 2197, 2198]; print(x[0])",
    "opts": [
      "2196",
      "2201",
      "2195",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2196, 2197, 2198]` is `2196`."
  },
  {
    "id": "py_con_b_1279",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1100)?\na = 1099; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1099 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1280",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1101)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_1281",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1102)?\nimport math\nprint(math.floor(1101 + 0.7))",
    "opts": [
      "1101",
      "1102",
      "1102",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1101.7)` rounds down to `1101`."
  },
  {
    "id": "py_fun_b_1282",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1103)?\ndef add_num(a, b=1102):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1107",
      "1102",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1102`, returning 5 + 1102 = `1107`."
  },
  {
    "id": "py_ope_b_1283",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1104)?\na = 1113; b = 3; print(a % b)",
    "opts": [
      "0",
      "371",
      "1113",
      "0"
    ],
    "ans": 0,
    "exp": "1113 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1284",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1105)?\ns = 'python_programming_1104'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1104",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1104'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1285",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1106)?\nx = 1105; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1105` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1286",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1107)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1287",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1108)?\nimport math\nprint(math.ceil(1107 + 0.1))",
    "opts": [
      "1108",
      "1107",
      "1107",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1107.1)` rounds up to `1108`."
  },
  {
    "id": "py_fun_i_1288",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1109)?\nsq = lambda x: x ** 2 + 1108\nprint(sq(3))",
    "opts": [
      "1117",
      "9",
      "1114",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1108 = 9 + 1108 = `1117`."
  },
  {
    "id": "py_ope_i_1289",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1110)?\nx = 1109; print(x << 1)",
    "opts": [
      "2218",
      "554",
      "4436",
      "0"
    ],
    "ans": 0,
    "exp": "`1109 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2218`)."
  },
  {
    "id": "py_dat_a_1290",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1111)?\nd = {'a': 1110}; d.update({'a': 1120, 'b': 1130}); print(d['a'])",
    "opts": [
      "1120",
      "1110",
      "1130",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1120`."
  },
  {
    "id": "py_con_a_1291",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1112)?\nval = 1; res = 'Yes' if (val and 1111) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1292",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1113)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1293",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1114)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1294",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1115)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1114\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1122",
      "1120",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1114 = `1122`."
  },
  {
    "id": "py_ope_a_1295",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1116)?\na = 1115; b = 1120; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1115 < 1120)` and `(1120 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1296",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1117)?\nx = [2232, 2233, 2234]; print(x[0])",
    "opts": [
      "2232",
      "2237",
      "2231",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2232, 2233, 2234]` is `2232`."
  },
  {
    "id": "py_con_b_1297",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1118)?\na = 1117; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1117 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1298",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1119)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_1299",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1120)?\nimport math\nprint(math.floor(1119 + 0.7))",
    "opts": [
      "1119",
      "1120",
      "1120",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1119.7)` rounds down to `1119`."
  },
  {
    "id": "py_fun_b_1300",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1121)?\ndef add_num(a, b=1120):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1125",
      "1120",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1120`, returning 5 + 1120 = `1125`."
  },
  {
    "id": "py_ope_b_1301",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1122)?\na = 1131; b = 3; print(a % b)",
    "opts": [
      "0",
      "377",
      "1131",
      "0"
    ],
    "ans": 0,
    "exp": "1131 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1302",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1123)?\ns = 'python_programming_1122'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1122",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1122'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1303",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1124)?\nx = 1123; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1123` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1304",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1125)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1305",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1126)?\nimport math\nprint(math.ceil(1125 + 0.1))",
    "opts": [
      "1126",
      "1125",
      "1125",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1125.1)` rounds up to `1126`."
  },
  {
    "id": "py_fun_i_1306",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1127)?\nsq = lambda x: x ** 2 + 1126\nprint(sq(3))",
    "opts": [
      "1135",
      "9",
      "1132",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1126 = 9 + 1126 = `1135`."
  },
  {
    "id": "py_ope_i_1307",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1128)?\nx = 1127; print(x << 1)",
    "opts": [
      "2254",
      "563",
      "4508",
      "0"
    ],
    "ans": 0,
    "exp": "`1127 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2254`)."
  },
  {
    "id": "py_dat_a_1308",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1129)?\nd = {'a': 1128}; d.update({'a': 1138, 'b': 1148}); print(d['a'])",
    "opts": [
      "1138",
      "1128",
      "1148",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1138`."
  },
  {
    "id": "py_con_a_1309",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1130)?\nval = 1; res = 'Yes' if (val and 1129) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1310",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1131)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1311",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1132)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1312",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1133)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1132\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1140",
      "1138",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1132 = `1140`."
  },
  {
    "id": "py_ope_a_1313",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1134)?\na = 1133; b = 1138; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1133 < 1138)` and `(1138 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1314",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1135)?\nx = [2268, 2269, 2270]; print(x[0])",
    "opts": [
      "2268",
      "2273",
      "2267",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2268, 2269, 2270]` is `2268`."
  },
  {
    "id": "py_con_b_1315",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1136)?\na = 1135; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1135 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1316",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1137)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_1317",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1138)?\nimport math\nprint(math.floor(1137 + 0.7))",
    "opts": [
      "1137",
      "1138",
      "1138",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1137.7)` rounds down to `1137`."
  },
  {
    "id": "py_fun_b_1318",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1139)?\ndef add_num(a, b=1138):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1143",
      "1138",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1138`, returning 5 + 1138 = `1143`."
  },
  {
    "id": "py_ope_b_1319",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1140)?\na = 1149; b = 3; print(a % b)",
    "opts": [
      "0",
      "383",
      "1149",
      "0"
    ],
    "ans": 0,
    "exp": "1149 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1320",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1141)?\ns = 'python_programming_1140'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1140",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1140'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1321",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1142)?\nx = 1141; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1141` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1322",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1143)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1323",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1144)?\nimport math\nprint(math.ceil(1143 + 0.1))",
    "opts": [
      "1144",
      "1143",
      "1143",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1143.1)` rounds up to `1144`."
  },
  {
    "id": "py_fun_i_1324",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1145)?\nsq = lambda x: x ** 2 + 1144\nprint(sq(3))",
    "opts": [
      "1153",
      "9",
      "1150",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1144 = 9 + 1144 = `1153`."
  },
  {
    "id": "py_ope_i_1325",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1146)?\nx = 1145; print(x << 1)",
    "opts": [
      "2290",
      "572",
      "4580",
      "0"
    ],
    "ans": 0,
    "exp": "`1145 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2290`)."
  },
  {
    "id": "py_dat_a_1326",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1147)?\nd = {'a': 1146}; d.update({'a': 1156, 'b': 1166}); print(d['a'])",
    "opts": [
      "1156",
      "1146",
      "1166",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1156`."
  },
  {
    "id": "py_con_a_1327",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1148)?\nval = 1; res = 'Yes' if (val and 1147) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1328",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1149)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1329",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1150)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1330",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1151)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1150\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1158",
      "1156",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1150 = `1158`."
  },
  {
    "id": "py_ope_a_1331",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1152)?\na = 1151; b = 1156; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1151 < 1156)` and `(1156 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1332",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1153)?\nx = [2304, 2305, 2306]; print(x[0])",
    "opts": [
      "2304",
      "2309",
      "2303",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2304, 2305, 2306]` is `2304`."
  },
  {
    "id": "py_con_b_1333",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1154)?\na = 1153; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1153 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1334",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1155)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_1335",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1156)?\nimport math\nprint(math.floor(1155 + 0.7))",
    "opts": [
      "1155",
      "1156",
      "1156",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1155.7)` rounds down to `1155`."
  },
  {
    "id": "py_fun_b_1336",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1157)?\ndef add_num(a, b=1156):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1161",
      "1156",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1156`, returning 5 + 1156 = `1161`."
  },
  {
    "id": "py_ope_b_1337",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1158)?\na = 1167; b = 3; print(a % b)",
    "opts": [
      "0",
      "389",
      "1167",
      "0"
    ],
    "ans": 0,
    "exp": "1167 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1338",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1159)?\ns = 'python_programming_1158'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1158",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1158'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1339",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1160)?\nx = 1159; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1159` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1340",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1161)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1341",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1162)?\nimport math\nprint(math.ceil(1161 + 0.1))",
    "opts": [
      "1162",
      "1161",
      "1161",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1161.1)` rounds up to `1162`."
  },
  {
    "id": "py_fun_i_1342",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1163)?\nsq = lambda x: x ** 2 + 1162\nprint(sq(3))",
    "opts": [
      "1171",
      "9",
      "1168",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1162 = 9 + 1162 = `1171`."
  },
  {
    "id": "py_ope_i_1343",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1164)?\nx = 1163; print(x << 1)",
    "opts": [
      "2326",
      "581",
      "4652",
      "0"
    ],
    "ans": 0,
    "exp": "`1163 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2326`)."
  },
  {
    "id": "py_dat_a_1344",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1165)?\nd = {'a': 1164}; d.update({'a': 1174, 'b': 1184}); print(d['a'])",
    "opts": [
      "1174",
      "1164",
      "1184",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1174`."
  },
  {
    "id": "py_con_a_1345",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1166)?\nval = 1; res = 'Yes' if (val and 1165) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1346",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1167)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1347",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1168)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1348",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1169)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1168\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1176",
      "1174",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1168 = `1176`."
  },
  {
    "id": "py_ope_a_1349",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1170)?\na = 1169; b = 1174; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1169 < 1174)` and `(1174 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1350",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1171)?\nx = [2340, 2341, 2342]; print(x[0])",
    "opts": [
      "2340",
      "2345",
      "2339",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2340, 2341, 2342]` is `2340`."
  },
  {
    "id": "py_con_b_1351",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1172)?\na = 1171; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1171 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1352",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1173)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_1353",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1174)?\nimport math\nprint(math.floor(1173 + 0.7))",
    "opts": [
      "1173",
      "1174",
      "1174",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1173.7)` rounds down to `1173`."
  },
  {
    "id": "py_fun_b_1354",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1175)?\ndef add_num(a, b=1174):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1179",
      "1174",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1174`, returning 5 + 1174 = `1179`."
  },
  {
    "id": "py_ope_b_1355",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1176)?\na = 1185; b = 3; print(a % b)",
    "opts": [
      "0",
      "395",
      "1185",
      "0"
    ],
    "ans": 0,
    "exp": "1185 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1356",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1177)?\ns = 'python_programming_1176'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1176",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1176'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1357",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1178)?\nx = 1177; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1177` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1358",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1179)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1359",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1180)?\nimport math\nprint(math.ceil(1179 + 0.1))",
    "opts": [
      "1180",
      "1179",
      "1179",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1179.1)` rounds up to `1180`."
  },
  {
    "id": "py_fun_i_1360",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1181)?\nsq = lambda x: x ** 2 + 1180\nprint(sq(3))",
    "opts": [
      "1189",
      "9",
      "1186",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1180 = 9 + 1180 = `1189`."
  },
  {
    "id": "py_ope_i_1361",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1182)?\nx = 1181; print(x << 1)",
    "opts": [
      "2362",
      "590",
      "4724",
      "0"
    ],
    "ans": 0,
    "exp": "`1181 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2362`)."
  },
  {
    "id": "py_dat_a_1362",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1183)?\nd = {'a': 1182}; d.update({'a': 1192, 'b': 1202}); print(d['a'])",
    "opts": [
      "1192",
      "1182",
      "1202",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1192`."
  },
  {
    "id": "py_con_a_1363",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1184)?\nval = 1; res = 'Yes' if (val and 1183) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1364",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1185)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1365",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1186)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1366",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1187)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1186\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1194",
      "1192",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1186 = `1194`."
  },
  {
    "id": "py_ope_a_1367",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1188)?\na = 1187; b = 1192; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1187 < 1192)` and `(1192 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1368",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1189)?\nx = [2376, 2377, 2378]; print(x[0])",
    "opts": [
      "2376",
      "2381",
      "2375",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2376, 2377, 2378]` is `2376`."
  },
  {
    "id": "py_con_b_1369",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1190)?\na = 1189; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1189 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1370",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1191)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_1371",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1192)?\nimport math\nprint(math.floor(1191 + 0.7))",
    "opts": [
      "1191",
      "1192",
      "1192",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1191.7)` rounds down to `1191`."
  },
  {
    "id": "py_fun_b_1372",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1193)?\ndef add_num(a, b=1192):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1197",
      "1192",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1192`, returning 5 + 1192 = `1197`."
  },
  {
    "id": "py_ope_b_1373",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1194)?\na = 1203; b = 3; print(a % b)",
    "opts": [
      "0",
      "401",
      "1203",
      "0"
    ],
    "ans": 0,
    "exp": "1203 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1374",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1195)?\ns = 'python_programming_1194'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1194",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1194'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1375",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1196)?\nx = 1195; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1195` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1376",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1197)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1377",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1198)?\nimport math\nprint(math.ceil(1197 + 0.1))",
    "opts": [
      "1198",
      "1197",
      "1197",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1197.1)` rounds up to `1198`."
  },
  {
    "id": "py_fun_i_1378",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1199)?\nsq = lambda x: x ** 2 + 1198\nprint(sq(3))",
    "opts": [
      "1207",
      "9",
      "1204",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1198 = 9 + 1198 = `1207`."
  },
  {
    "id": "py_ope_i_1379",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1200)?\nx = 1199; print(x << 1)",
    "opts": [
      "2398",
      "599",
      "4796",
      "0"
    ],
    "ans": 0,
    "exp": "`1199 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2398`)."
  },
  {
    "id": "py_dat_a_1380",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1201)?\nd = {'a': 1200}; d.update({'a': 1210, 'b': 1220}); print(d['a'])",
    "opts": [
      "1210",
      "1200",
      "1220",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1210`."
  },
  {
    "id": "py_con_a_1381",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1202)?\nval = 1; res = 'Yes' if (val and 1201) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1382",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1203)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1383",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1204)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1384",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1205)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1204\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1212",
      "1210",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1204 = `1212`."
  },
  {
    "id": "py_ope_a_1385",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1206)?\na = 1205; b = 1210; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1205 < 1210)` and `(1210 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1386",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1207)?\nx = [2412, 2413, 2414]; print(x[0])",
    "opts": [
      "2412",
      "2417",
      "2411",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2412, 2413, 2414]` is `2412`."
  },
  {
    "id": "py_con_b_1387",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1208)?\na = 1207; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1207 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1388",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1209)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_1389",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1210)?\nimport math\nprint(math.floor(1209 + 0.7))",
    "opts": [
      "1209",
      "1210",
      "1210",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1209.7)` rounds down to `1209`."
  },
  {
    "id": "py_fun_b_1390",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1211)?\ndef add_num(a, b=1210):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1215",
      "1210",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1210`, returning 5 + 1210 = `1215`."
  },
  {
    "id": "py_ope_b_1391",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1212)?\na = 1221; b = 3; print(a % b)",
    "opts": [
      "0",
      "407",
      "1221",
      "0"
    ],
    "ans": 0,
    "exp": "1221 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1392",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1213)?\ns = 'python_programming_1212'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1212",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1212'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1393",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1214)?\nx = 1213; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1213` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1394",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1215)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1395",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1216)?\nimport math\nprint(math.ceil(1215 + 0.1))",
    "opts": [
      "1216",
      "1215",
      "1215",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1215.1)` rounds up to `1216`."
  },
  {
    "id": "py_fun_i_1396",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1217)?\nsq = lambda x: x ** 2 + 1216\nprint(sq(3))",
    "opts": [
      "1225",
      "9",
      "1222",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1216 = 9 + 1216 = `1225`."
  },
  {
    "id": "py_ope_i_1397",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1218)?\nx = 1217; print(x << 1)",
    "opts": [
      "2434",
      "608",
      "4868",
      "0"
    ],
    "ans": 0,
    "exp": "`1217 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2434`)."
  },
  {
    "id": "py_dat_a_1398",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1219)?\nd = {'a': 1218}; d.update({'a': 1228, 'b': 1238}); print(d['a'])",
    "opts": [
      "1228",
      "1218",
      "1238",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1228`."
  },
  {
    "id": "py_con_a_1399",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1220)?\nval = 1; res = 'Yes' if (val and 1219) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1400",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1221)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1401",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1222)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1402",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1223)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1222\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1230",
      "1228",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1222 = `1230`."
  },
  {
    "id": "py_ope_a_1403",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1224)?\na = 1223; b = 1228; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1223 < 1228)` and `(1228 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1404",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1225)?\nx = [2448, 2449, 2450]; print(x[0])",
    "opts": [
      "2448",
      "2453",
      "2447",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2448, 2449, 2450]` is `2448`."
  },
  {
    "id": "py_con_b_1405",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1226)?\na = 1225; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1225 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1406",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1227)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_1407",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1228)?\nimport math\nprint(math.floor(1227 + 0.7))",
    "opts": [
      "1227",
      "1228",
      "1228",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1227.7)` rounds down to `1227`."
  },
  {
    "id": "py_fun_b_1408",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1229)?\ndef add_num(a, b=1228):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1233",
      "1228",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1228`, returning 5 + 1228 = `1233`."
  },
  {
    "id": "py_ope_b_1409",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1230)?\na = 1239; b = 3; print(a % b)",
    "opts": [
      "0",
      "413",
      "1239",
      "0"
    ],
    "ans": 0,
    "exp": "1239 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1410",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1231)?\ns = 'python_programming_1230'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1230",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1230'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1411",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1232)?\nx = 1231; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1231` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1412",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1233)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1413",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1234)?\nimport math\nprint(math.ceil(1233 + 0.1))",
    "opts": [
      "1234",
      "1233",
      "1233",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1233.1)` rounds up to `1234`."
  },
  {
    "id": "py_fun_i_1414",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1235)?\nsq = lambda x: x ** 2 + 1234\nprint(sq(3))",
    "opts": [
      "1243",
      "9",
      "1240",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1234 = 9 + 1234 = `1243`."
  },
  {
    "id": "py_ope_i_1415",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1236)?\nx = 1235; print(x << 1)",
    "opts": [
      "2470",
      "617",
      "4940",
      "0"
    ],
    "ans": 0,
    "exp": "`1235 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2470`)."
  },
  {
    "id": "py_dat_a_1416",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1237)?\nd = {'a': 1236}; d.update({'a': 1246, 'b': 1256}); print(d['a'])",
    "opts": [
      "1246",
      "1236",
      "1256",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1246`."
  },
  {
    "id": "py_con_a_1417",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1238)?\nval = 1; res = 'Yes' if (val and 1237) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1418",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1239)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1419",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1240)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1420",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1241)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1240\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1248",
      "1246",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1240 = `1248`."
  },
  {
    "id": "py_ope_a_1421",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1242)?\na = 1241; b = 1246; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1241 < 1246)` and `(1246 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1422",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1243)?\nx = [2484, 2485, 2486]; print(x[0])",
    "opts": [
      "2484",
      "2489",
      "2483",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2484, 2485, 2486]` is `2484`."
  },
  {
    "id": "py_con_b_1423",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1244)?\na = 1243; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1243 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1424",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1245)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_1425",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1246)?\nimport math\nprint(math.floor(1245 + 0.7))",
    "opts": [
      "1245",
      "1246",
      "1246",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1245.7)` rounds down to `1245`."
  },
  {
    "id": "py_fun_b_1426",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1247)?\ndef add_num(a, b=1246):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1251",
      "1246",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1246`, returning 5 + 1246 = `1251`."
  },
  {
    "id": "py_ope_b_1427",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1248)?\na = 1257; b = 3; print(a % b)",
    "opts": [
      "0",
      "419",
      "1257",
      "0"
    ],
    "ans": 0,
    "exp": "1257 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1428",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1249)?\ns = 'python_programming_1248'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1248",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1248'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1429",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1250)?\nx = 1249; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1249` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1430",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1251)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1431",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1252)?\nimport math\nprint(math.ceil(1251 + 0.1))",
    "opts": [
      "1252",
      "1251",
      "1251",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1251.1)` rounds up to `1252`."
  },
  {
    "id": "py_fun_i_1432",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1253)?\nsq = lambda x: x ** 2 + 1252\nprint(sq(3))",
    "opts": [
      "1261",
      "9",
      "1258",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1252 = 9 + 1252 = `1261`."
  },
  {
    "id": "py_ope_i_1433",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1254)?\nx = 1253; print(x << 1)",
    "opts": [
      "2506",
      "626",
      "5012",
      "0"
    ],
    "ans": 0,
    "exp": "`1253 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2506`)."
  },
  {
    "id": "py_dat_a_1434",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1255)?\nd = {'a': 1254}; d.update({'a': 1264, 'b': 1274}); print(d['a'])",
    "opts": [
      "1264",
      "1254",
      "1274",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1264`."
  },
  {
    "id": "py_con_a_1435",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1256)?\nval = 1; res = 'Yes' if (val and 1255) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1436",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1257)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1437",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1258)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1438",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1259)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1258\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1266",
      "1264",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1258 = `1266`."
  },
  {
    "id": "py_ope_a_1439",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1260)?\na = 1259; b = 1264; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1259 < 1264)` and `(1264 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1440",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1261)?\nx = [2520, 2521, 2522]; print(x[0])",
    "opts": [
      "2520",
      "2525",
      "2519",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2520, 2521, 2522]` is `2520`."
  },
  {
    "id": "py_con_b_1441",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1262)?\na = 1261; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1261 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1442",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1263)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_1443",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1264)?\nimport math\nprint(math.floor(1263 + 0.7))",
    "opts": [
      "1263",
      "1264",
      "1264",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1263.7)` rounds down to `1263`."
  },
  {
    "id": "py_fun_b_1444",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1265)?\ndef add_num(a, b=1264):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1269",
      "1264",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1264`, returning 5 + 1264 = `1269`."
  },
  {
    "id": "py_ope_b_1445",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1266)?\na = 1275; b = 3; print(a % b)",
    "opts": [
      "0",
      "425",
      "1275",
      "0"
    ],
    "ans": 0,
    "exp": "1275 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1446",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1267)?\ns = 'python_programming_1266'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1266",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1266'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1447",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1268)?\nx = 1267; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1267` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1448",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1269)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1449",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1270)?\nimport math\nprint(math.ceil(1269 + 0.1))",
    "opts": [
      "1270",
      "1269",
      "1269",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1269.1)` rounds up to `1270`."
  },
  {
    "id": "py_fun_i_1450",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1271)?\nsq = lambda x: x ** 2 + 1270\nprint(sq(3))",
    "opts": [
      "1279",
      "9",
      "1276",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1270 = 9 + 1270 = `1279`."
  },
  {
    "id": "py_ope_i_1451",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1272)?\nx = 1271; print(x << 1)",
    "opts": [
      "2542",
      "635",
      "5084",
      "0"
    ],
    "ans": 0,
    "exp": "`1271 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2542`)."
  },
  {
    "id": "py_dat_a_1452",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1273)?\nd = {'a': 1272}; d.update({'a': 1282, 'b': 1292}); print(d['a'])",
    "opts": [
      "1282",
      "1272",
      "1292",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1282`."
  },
  {
    "id": "py_con_a_1453",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1274)?\nval = 1; res = 'Yes' if (val and 1273) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1454",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1275)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1455",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1276)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1456",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1277)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1276\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1284",
      "1282",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1276 = `1284`."
  },
  {
    "id": "py_ope_a_1457",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1278)?\na = 1277; b = 1282; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1277 < 1282)` and `(1282 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1458",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1279)?\nx = [2556, 2557, 2558]; print(x[0])",
    "opts": [
      "2556",
      "2561",
      "2555",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2556, 2557, 2558]` is `2556`."
  },
  {
    "id": "py_con_b_1459",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1280)?\na = 1279; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1279 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1460",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1281)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_1461",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1282)?\nimport math\nprint(math.floor(1281 + 0.7))",
    "opts": [
      "1281",
      "1282",
      "1282",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1281.7)` rounds down to `1281`."
  },
  {
    "id": "py_fun_b_1462",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1283)?\ndef add_num(a, b=1282):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1287",
      "1282",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1282`, returning 5 + 1282 = `1287`."
  },
  {
    "id": "py_ope_b_1463",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1284)?\na = 1293; b = 3; print(a % b)",
    "opts": [
      "0",
      "431",
      "1293",
      "0"
    ],
    "ans": 0,
    "exp": "1293 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1464",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1285)?\ns = 'python_programming_1284'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1284",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1284'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1465",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1286)?\nx = 1285; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1285` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1466",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1287)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1467",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1288)?\nimport math\nprint(math.ceil(1287 + 0.1))",
    "opts": [
      "1288",
      "1287",
      "1287",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1287.1)` rounds up to `1288`."
  },
  {
    "id": "py_fun_i_1468",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1289)?\nsq = lambda x: x ** 2 + 1288\nprint(sq(3))",
    "opts": [
      "1297",
      "9",
      "1294",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1288 = 9 + 1288 = `1297`."
  },
  {
    "id": "py_ope_i_1469",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1290)?\nx = 1289; print(x << 1)",
    "opts": [
      "2578",
      "644",
      "5156",
      "0"
    ],
    "ans": 0,
    "exp": "`1289 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2578`)."
  },
  {
    "id": "py_dat_a_1470",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1291)?\nd = {'a': 1290}; d.update({'a': 1300, 'b': 1310}); print(d['a'])",
    "opts": [
      "1300",
      "1290",
      "1310",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1300`."
  },
  {
    "id": "py_con_a_1471",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1292)?\nval = 1; res = 'Yes' if (val and 1291) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1472",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1293)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1473",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1294)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1474",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1295)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1294\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1302",
      "1300",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1294 = `1302`."
  },
  {
    "id": "py_ope_a_1475",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1296)?\na = 1295; b = 1300; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1295 < 1300)` and `(1300 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1476",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1297)?\nx = [2592, 2593, 2594]; print(x[0])",
    "opts": [
      "2592",
      "2597",
      "2591",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2592, 2593, 2594]` is `2592`."
  },
  {
    "id": "py_con_b_1477",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1298)?\na = 1297; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1297 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1478",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1299)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_1479",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1300)?\nimport math\nprint(math.floor(1299 + 0.7))",
    "opts": [
      "1299",
      "1300",
      "1300",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1299.7)` rounds down to `1299`."
  },
  {
    "id": "py_fun_b_1480",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1301)?\ndef add_num(a, b=1300):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1305",
      "1300",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1300`, returning 5 + 1300 = `1305`."
  },
  {
    "id": "py_ope_b_1481",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1302)?\na = 1311; b = 3; print(a % b)",
    "opts": [
      "0",
      "437",
      "1311",
      "0"
    ],
    "ans": 0,
    "exp": "1311 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1482",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1303)?\ns = 'python_programming_1302'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1302",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1302'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1483",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1304)?\nx = 1303; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1303` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1484",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1305)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1485",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1306)?\nimport math\nprint(math.ceil(1305 + 0.1))",
    "opts": [
      "1306",
      "1305",
      "1305",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1305.1)` rounds up to `1306`."
  },
  {
    "id": "py_fun_i_1486",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1307)?\nsq = lambda x: x ** 2 + 1306\nprint(sq(3))",
    "opts": [
      "1315",
      "9",
      "1312",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1306 = 9 + 1306 = `1315`."
  },
  {
    "id": "py_ope_i_1487",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1308)?\nx = 1307; print(x << 1)",
    "opts": [
      "2614",
      "653",
      "5228",
      "0"
    ],
    "ans": 0,
    "exp": "`1307 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2614`)."
  },
  {
    "id": "py_dat_a_1488",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1309)?\nd = {'a': 1308}; d.update({'a': 1318, 'b': 1328}); print(d['a'])",
    "opts": [
      "1318",
      "1308",
      "1328",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1318`."
  },
  {
    "id": "py_con_a_1489",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1310)?\nval = 1; res = 'Yes' if (val and 1309) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1490",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1311)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1491",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1312)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1492",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1313)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1312\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1320",
      "1318",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1312 = `1320`."
  },
  {
    "id": "py_ope_a_1493",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1314)?\na = 1313; b = 1318; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1313 < 1318)` and `(1318 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1494",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1315)?\nx = [2628, 2629, 2630]; print(x[0])",
    "opts": [
      "2628",
      "2633",
      "2627",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2628, 2629, 2630]` is `2628`."
  },
  {
    "id": "py_con_b_1495",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1316)?\na = 1315; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1315 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1496",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1317)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_1497",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1318)?\nimport math\nprint(math.floor(1317 + 0.7))",
    "opts": [
      "1317",
      "1318",
      "1318",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1317.7)` rounds down to `1317`."
  },
  {
    "id": "py_fun_b_1498",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1319)?\ndef add_num(a, b=1318):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1323",
      "1318",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1318`, returning 5 + 1318 = `1323`."
  },
  {
    "id": "py_ope_b_1499",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1320)?\na = 1329; b = 3; print(a % b)",
    "opts": [
      "0",
      "443",
      "1329",
      "0"
    ],
    "ans": 0,
    "exp": "1329 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1500",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1321)?\ns = 'python_programming_1320'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1320",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1320'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1501",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1322)?\nx = 1321; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1321` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1502",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1323)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1503",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1324)?\nimport math\nprint(math.ceil(1323 + 0.1))",
    "opts": [
      "1324",
      "1323",
      "1323",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1323.1)` rounds up to `1324`."
  },
  {
    "id": "py_fun_i_1504",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1325)?\nsq = lambda x: x ** 2 + 1324\nprint(sq(3))",
    "opts": [
      "1333",
      "9",
      "1330",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1324 = 9 + 1324 = `1333`."
  },
  {
    "id": "py_ope_i_1505",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1326)?\nx = 1325; print(x << 1)",
    "opts": [
      "2650",
      "662",
      "5300",
      "0"
    ],
    "ans": 0,
    "exp": "`1325 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2650`)."
  },
  {
    "id": "py_dat_a_1506",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1327)?\nd = {'a': 1326}; d.update({'a': 1336, 'b': 1346}); print(d['a'])",
    "opts": [
      "1336",
      "1326",
      "1346",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1336`."
  },
  {
    "id": "py_con_a_1507",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1328)?\nval = 1; res = 'Yes' if (val and 1327) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1508",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1329)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1509",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1330)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1510",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1331)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1330\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1338",
      "1336",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1330 = `1338`."
  },
  {
    "id": "py_ope_a_1511",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1332)?\na = 1331; b = 1336; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1331 < 1336)` and `(1336 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1512",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1333)?\nx = [2664, 2665, 2666]; print(x[0])",
    "opts": [
      "2664",
      "2669",
      "2663",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2664, 2665, 2666]` is `2664`."
  },
  {
    "id": "py_con_b_1513",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1334)?\na = 1333; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1333 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1514",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1335)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_1515",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1336)?\nimport math\nprint(math.floor(1335 + 0.7))",
    "opts": [
      "1335",
      "1336",
      "1336",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1335.7)` rounds down to `1335`."
  },
  {
    "id": "py_fun_b_1516",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1337)?\ndef add_num(a, b=1336):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1341",
      "1336",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1336`, returning 5 + 1336 = `1341`."
  },
  {
    "id": "py_ope_b_1517",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1338)?\na = 1347; b = 3; print(a % b)",
    "opts": [
      "0",
      "449",
      "1347",
      "0"
    ],
    "ans": 0,
    "exp": "1347 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1518",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1339)?\ns = 'python_programming_1338'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1338",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1338'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1519",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1340)?\nx = 1339; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1339` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1520",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1341)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1521",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1342)?\nimport math\nprint(math.ceil(1341 + 0.1))",
    "opts": [
      "1342",
      "1341",
      "1341",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1341.1)` rounds up to `1342`."
  },
  {
    "id": "py_fun_i_1522",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1343)?\nsq = lambda x: x ** 2 + 1342\nprint(sq(3))",
    "opts": [
      "1351",
      "9",
      "1348",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1342 = 9 + 1342 = `1351`."
  },
  {
    "id": "py_ope_i_1523",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1344)?\nx = 1343; print(x << 1)",
    "opts": [
      "2686",
      "671",
      "5372",
      "0"
    ],
    "ans": 0,
    "exp": "`1343 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2686`)."
  },
  {
    "id": "py_dat_a_1524",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1345)?\nd = {'a': 1344}; d.update({'a': 1354, 'b': 1364}); print(d['a'])",
    "opts": [
      "1354",
      "1344",
      "1364",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1354`."
  },
  {
    "id": "py_con_a_1525",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1346)?\nval = 1; res = 'Yes' if (val and 1345) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1526",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1347)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1527",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1348)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1528",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1349)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1348\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1356",
      "1354",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1348 = `1356`."
  },
  {
    "id": "py_ope_a_1529",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1350)?\na = 1349; b = 1354; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1349 < 1354)` and `(1354 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1530",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1351)?\nx = [2700, 2701, 2702]; print(x[0])",
    "opts": [
      "2700",
      "2705",
      "2699",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2700, 2701, 2702]` is `2700`."
  },
  {
    "id": "py_con_b_1531",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1352)?\na = 1351; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1351 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1532",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1353)?\nc = 0\nfor i in range(5):\n    c += 1\nprint(c)",
    "opts": [
      "5",
      "6",
      "4",
      "0"
    ],
    "ans": 0,
    "exp": "`range(5)` executes 5 times, incrementing `c` to `5`."
  },
  {
    "id": "py_mod_b_1533",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1354)?\nimport math\nprint(math.floor(1353 + 0.7))",
    "opts": [
      "1353",
      "1354",
      "1354",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1353.7)` rounds down to `1353`."
  },
  {
    "id": "py_fun_b_1534",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1355)?\ndef add_num(a, b=1354):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1359",
      "1354",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1354`, returning 5 + 1354 = `1359`."
  },
  {
    "id": "py_ope_b_1535",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1356)?\na = 1365; b = 3; print(a % b)",
    "opts": [
      "0",
      "455",
      "1365",
      "0"
    ],
    "ans": 0,
    "exp": "1365 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1536",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1357)?\ns = 'python_programming_1356'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1356",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1356'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1537",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1358)?\nx = 1357; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1357` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1538",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1359)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1539",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1360)?\nimport math\nprint(math.ceil(1359 + 0.1))",
    "opts": [
      "1360",
      "1359",
      "1359",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1359.1)` rounds up to `1360`."
  },
  {
    "id": "py_fun_i_1540",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1361)?\nsq = lambda x: x ** 2 + 1360\nprint(sq(3))",
    "opts": [
      "1369",
      "9",
      "1366",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1360 = 9 + 1360 = `1369`."
  },
  {
    "id": "py_ope_i_1541",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1362)?\nx = 1361; print(x << 1)",
    "opts": [
      "2722",
      "680",
      "5444",
      "0"
    ],
    "ans": 0,
    "exp": "`1361 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2722`)."
  },
  {
    "id": "py_dat_a_1542",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1363)?\nd = {'a': 1362}; d.update({'a': 1372, 'b': 1382}); print(d['a'])",
    "opts": [
      "1372",
      "1362",
      "1382",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1372`."
  },
  {
    "id": "py_con_a_1543",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1364)?\nval = 1; res = 'Yes' if (val and 1363) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1544",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1365)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1545",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1366)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1546",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1367)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1366\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1374",
      "1372",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1366 = `1374`."
  },
  {
    "id": "py_ope_a_1547",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1368)?\na = 1367; b = 1372; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1367 < 1372)` and `(1372 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1548",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1369)?\nx = [2736, 2737, 2738]; print(x[0])",
    "opts": [
      "2736",
      "2741",
      "2735",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2736, 2737, 2738]` is `2736`."
  },
  {
    "id": "py_con_b_1549",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1370)?\na = 1369; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1369 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1550",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1371)?\nc = 0\nfor i in range(3):\n    c += 1\nprint(c)",
    "opts": [
      "3",
      "4",
      "2",
      "0"
    ],
    "ans": 0,
    "exp": "`range(3)` executes 3 times, incrementing `c` to `3`."
  },
  {
    "id": "py_mod_b_1551",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1372)?\nimport math\nprint(math.floor(1371 + 0.7))",
    "opts": [
      "1371",
      "1372",
      "1372",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1371.7)` rounds down to `1371`."
  },
  {
    "id": "py_fun_b_1552",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1373)?\ndef add_num(a, b=1372):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1377",
      "1372",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1372`, returning 5 + 1372 = `1377`."
  },
  {
    "id": "py_ope_b_1553",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1374)?\na = 1383; b = 3; print(a % b)",
    "opts": [
      "0",
      "461",
      "1383",
      "0"
    ],
    "ans": 0,
    "exp": "1383 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1554",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1375)?\ns = 'python_programming_1374'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1374",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1374'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1555",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1376)?\nx = 1375; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1375` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1556",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1377)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1557",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1378)?\nimport math\nprint(math.ceil(1377 + 0.1))",
    "opts": [
      "1378",
      "1377",
      "1377",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1377.1)` rounds up to `1378`."
  },
  {
    "id": "py_fun_i_1558",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1379)?\nsq = lambda x: x ** 2 + 1378\nprint(sq(3))",
    "opts": [
      "1387",
      "9",
      "1384",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1378 = 9 + 1378 = `1387`."
  },
  {
    "id": "py_ope_i_1559",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1380)?\nx = 1379; print(x << 1)",
    "opts": [
      "2758",
      "689",
      "5516",
      "0"
    ],
    "ans": 0,
    "exp": "`1379 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2758`)."
  },
  {
    "id": "py_dat_a_1560",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1381)?\nd = {'a': 1380}; d.update({'a': 1390, 'b': 1400}); print(d['a'])",
    "opts": [
      "1390",
      "1380",
      "1400",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1390`."
  },
  {
    "id": "py_con_a_1561",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1382)?\nval = 1; res = 'Yes' if (val and 1381) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1562",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1383)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1563",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1384)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1564",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1385)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1384\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1392",
      "1390",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1384 = `1392`."
  },
  {
    "id": "py_ope_a_1565",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1386)?\na = 1385; b = 1390; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1385 < 1390)` and `(1390 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1566",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1387)?\nx = [2772, 2773, 2774]; print(x[0])",
    "opts": [
      "2772",
      "2777",
      "2771",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2772, 2773, 2774]` is `2772`."
  },
  {
    "id": "py_con_b_1567",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1388)?\na = 1387; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1387 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1568",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1389)?\nc = 0\nfor i in range(6):\n    c += 1\nprint(c)",
    "opts": [
      "6",
      "7",
      "5",
      "0"
    ],
    "ans": 0,
    "exp": "`range(6)` executes 6 times, incrementing `c` to `6`."
  },
  {
    "id": "py_mod_b_1569",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1390)?\nimport math\nprint(math.floor(1389 + 0.7))",
    "opts": [
      "1389",
      "1390",
      "1390",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1389.7)` rounds down to `1389`."
  },
  {
    "id": "py_fun_b_1570",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1391)?\ndef add_num(a, b=1390):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1395",
      "1390",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1390`, returning 5 + 1390 = `1395`."
  },
  {
    "id": "py_ope_b_1571",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1392)?\na = 1401; b = 3; print(a % b)",
    "opts": [
      "0",
      "467",
      "1401",
      "0"
    ],
    "ans": 0,
    "exp": "1401 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1572",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1393)?\ns = 'python_programming_1392'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1392",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1392'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1573",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1394)?\nx = 1393; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1393` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1574",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1395)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1575",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1396)?\nimport math\nprint(math.ceil(1395 + 0.1))",
    "opts": [
      "1396",
      "1395",
      "1395",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1395.1)` rounds up to `1396`."
  },
  {
    "id": "py_fun_i_1576",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1397)?\nsq = lambda x: x ** 2 + 1396\nprint(sq(3))",
    "opts": [
      "1405",
      "9",
      "1402",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1396 = 9 + 1396 = `1405`."
  },
  {
    "id": "py_ope_i_1577",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1398)?\nx = 1397; print(x << 1)",
    "opts": [
      "2794",
      "698",
      "5588",
      "0"
    ],
    "ans": 0,
    "exp": "`1397 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2794`)."
  },
  {
    "id": "py_dat_a_1578",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1399)?\nd = {'a': 1398}; d.update({'a': 1408, 'b': 1418}); print(d['a'])",
    "opts": [
      "1408",
      "1398",
      "1418",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1408`."
  },
  {
    "id": "py_con_a_1579",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1400)?\nval = 1; res = 'Yes' if (val and 1399) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1580",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1401)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1581",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1402)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1582",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1403)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1402\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1410",
      "1408",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1402 = `1410`."
  },
  {
    "id": "py_ope_a_1583",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1404)?\na = 1403; b = 1408; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1403 < 1408)` and `(1408 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1584",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1405)?\nx = [2808, 2809, 2810]; print(x[0])",
    "opts": [
      "2808",
      "2813",
      "2807",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2808, 2809, 2810]` is `2808`."
  },
  {
    "id": "py_con_b_1585",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1406)?\na = 1405; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1405 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1586",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1407)?\nc = 0\nfor i in range(4):\n    c += 1\nprint(c)",
    "opts": [
      "4",
      "5",
      "3",
      "0"
    ],
    "ans": 0,
    "exp": "`range(4)` executes 4 times, incrementing `c` to `4`."
  },
  {
    "id": "py_mod_b_1587",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1408)?\nimport math\nprint(math.floor(1407 + 0.7))",
    "opts": [
      "1407",
      "1408",
      "1408",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1407.7)` rounds down to `1407`."
  },
  {
    "id": "py_fun_b_1588",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1409)?\ndef add_num(a, b=1408):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1413",
      "1408",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1408`, returning 5 + 1408 = `1413`."
  },
  {
    "id": "py_ope_b_1589",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1410)?\na = 1419; b = 3; print(a % b)",
    "opts": [
      "0",
      "473",
      "1419",
      "0"
    ],
    "ans": 0,
    "exp": "1419 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1590",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1411)?\ns = 'python_programming_1410'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1410",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1410'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1591",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1412)?\nx = 1411; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1411` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1592",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1413)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1593",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1414)?\nimport math\nprint(math.ceil(1413 + 0.1))",
    "opts": [
      "1414",
      "1413",
      "1413",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1413.1)` rounds up to `1414`."
  },
  {
    "id": "py_fun_i_1594",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1415)?\nsq = lambda x: x ** 2 + 1414\nprint(sq(3))",
    "opts": [
      "1423",
      "9",
      "1420",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1414 = 9 + 1414 = `1423`."
  },
  {
    "id": "py_ope_i_1595",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1416)?\nx = 1415; print(x << 1)",
    "opts": [
      "2830",
      "707",
      "5660",
      "0"
    ],
    "ans": 0,
    "exp": "`1415 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2830`)."
  },
  {
    "id": "py_dat_a_1596",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1417)?\nd = {'a': 1416}; d.update({'a': 1426, 'b': 1436}); print(d['a'])",
    "opts": [
      "1426",
      "1416",
      "1436",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1426`."
  },
  {
    "id": "py_con_a_1597",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1418)?\nval = 1; res = 'Yes' if (val and 1417) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1598",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1419)?\nres = [x**2 for x in range(5) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4, 9, 16]",
      "[0, 1, 4, 9, 16]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4, 9, 16]`."
  },
  {
    "id": "py_mod_a_1599",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1420)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 6])\nprint(res)",
    "opts": [
      "12",
      "9",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 6 = `12`."
  },
  {
    "id": "py_fun_a_1600",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1421)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1420\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1428",
      "1426",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1420 = `1428`."
  },
  {
    "id": "py_ope_a_1601",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1422)?\na = 1421; b = 1426; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1421 < 1426)` and `(1426 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1602",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1423)?\nx = [2844, 2845, 2846]; print(x[0])",
    "opts": [
      "2844",
      "2849",
      "2843",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2844, 2845, 2846]` is `2844`."
  },
  {
    "id": "py_con_b_1603",
    "topic": "conditional statement",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1424)?\na = 1423; print('EVEN' if a % 2 == 0 else 'ODD')",
    "opts": [
      "ODD",
      "EVEN",
      "None",
      "Error"
    ],
    "ans": 0,
    "exp": "1423 % 2 == 1, which is odd."
  },
  {
    "id": "py_loo_b_1604",
    "topic": "loops",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1425)?\nc = 0\nfor i in range(7):\n    c += 1\nprint(c)",
    "opts": [
      "7",
      "8",
      "6",
      "0"
    ],
    "ans": 0,
    "exp": "`range(7)` executes 7 times, incrementing `c` to `7`."
  },
  {
    "id": "py_mod_b_1605",
    "topic": "module",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1426)?\nimport math\nprint(math.floor(1425 + 0.7))",
    "opts": [
      "1425",
      "1426",
      "1426",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.floor(1425.7)` rounds down to `1425`."
  },
  {
    "id": "py_fun_b_1606",
    "topic": "functions",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1427)?\ndef add_num(a, b=1426):\n    return a + b\nprint(add_num(5))",
    "opts": [
      "1431",
      "1426",
      "5",
      "TypeError"
    ],
    "ans": 0,
    "exp": "Uses default parameter `b=1426`, returning 5 + 1426 = `1431`."
  },
  {
    "id": "py_ope_b_1607",
    "topic": "operators",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1428)?\na = 1437; b = 3; print(a % b)",
    "opts": [
      "0",
      "479",
      "1437",
      "0"
    ],
    "ans": 0,
    "exp": "1437 % 3 calculates the remainder, which is `0`."
  },
  {
    "id": "py_dat_i_1608",
    "topic": "datatype",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1429)?\ns = 'python_programming_1428'; print(s.split('_')[1])",
    "opts": [
      "programming",
      "python",
      "1428",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Splitting string on '_' yields ['python', 'programming', '1428'], so index 1 is 'programming'."
  },
  {
    "id": "py_con_i_1609",
    "topic": "conditional statement",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1430)?\nx = 1429; print('A' if x > 100 else ('B' if x > 50 else 'C'))",
    "opts": [
      "A",
      "B",
      "C",
      "Error"
    ],
    "ans": 0,
    "exp": "Nested ternary for `x = 1429` evaluates to `A`."
  },
  {
    "id": "py_loo_i_1610",
    "topic": "loops",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1431)?\ns = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "opts": [
      "9",
      "15",
      "0",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "`continue` skips even numbers. Sum of odd numbers in range is `9`."
  },
  {
    "id": "py_mod_i_1611",
    "topic": "module",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1432)?\nimport math\nprint(math.ceil(1431 + 0.1))",
    "opts": [
      "1432",
      "1431",
      "1431",
      "Error"
    ],
    "ans": 0,
    "exp": "`math.ceil(1431.1)` rounds up to `1432`."
  },
  {
    "id": "py_fun_i_1612",
    "topic": "functions",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1433)?\nsq = lambda x: x ** 2 + 1432\nprint(sq(3))",
    "opts": [
      "1441",
      "9",
      "1438",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Lambda evaluates 3**2 + 1432 = 9 + 1432 = `1441`."
  },
  {
    "id": "py_ope_i_1613",
    "topic": "operators",
    "level": "intermediate",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1434)?\nx = 1433; print(x << 1)",
    "opts": [
      "2866",
      "716",
      "5732",
      "0"
    ],
    "ans": 0,
    "exp": "`1433 << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`2866`)."
  },
  {
    "id": "py_dat_a_1614",
    "topic": "datatype",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1435)?\nd = {'a': 1434}; d.update({'a': 1444, 'b': 1454}); print(d['a'])",
    "opts": [
      "1444",
      "1434",
      "1454",
      "KeyError"
    ],
    "ans": 0,
    "exp": "`update()` overwrites key 'a' with new value `1444`."
  },
  {
    "id": "py_con_a_1615",
    "topic": "conditional statement",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding conditional statement (Test Case #1436)?\nval = 1; res = 'Yes' if (val and 1435) else 'No'; print(res)",
    "opts": [
      "Yes",
      "No",
      "True",
      "False"
    ],
    "ans": 0,
    "exp": "Short-circuit and logical evaluation for val=1 yields `Yes`."
  },
  {
    "id": "py_loo_a_1616",
    "topic": "loops",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding loops (Test Case #1437)?\nres = [x**2 for x in range(3) if x != 1]\nprint(res)",
    "opts": [
      "[0, 4]",
      "[0, 1, 4]",
      "[]",
      "Error"
    ],
    "ans": 0,
    "exp": "List comprehension squares values in range excluding 1: `[0, 4]`."
  },
  {
    "id": "py_mod_a_1617",
    "topic": "module",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding module (Test Case #1438)?\nfrom functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, 4])\nprint(res)",
    "opts": [
      "8",
      "7",
      "0",
      "TypeError"
    ],
    "ans": 0,
    "exp": "`reduce` calculates cumulative product: 1 * 2 * 4 = `8`."
  },
  {
    "id": "py_fun_a_1618",
    "topic": "functions",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding functions (Test Case #1439)?\ndef outer(x):\n    def inner(y):\n        return x * y + 1438\n    return inner\nf = outer(2)\nprint(f(4))",
    "opts": [
      "1446",
      "1444",
      "8",
      "NameError"
    ],
    "ans": 0,
    "exp": "Closure retains `x=2`. `inner(4)` computes 2*4 + 1438 = `1446`."
  },
  {
    "id": "py_ope_a_1619",
    "topic": "operators",
    "level": "advance",
    "q": "What is the output of the Python code snippet regarding operators (Test Case #1440)?\na = 1439; b = 1444; print((a < b) and (b > 0))",
    "opts": [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    "ans": 0,
    "exp": "Both `(1439 < 1444)` and `(1444 > 0)` are True, so `and` returns True."
  },
  {
    "id": "py_dat_b_1620",
    "topic": "datatype",
    "level": "basic",
    "q": "What is the output of the Python code snippet regarding datatype (Test Case #1441)?\nx = [2880, 2881, 2882]; print(x[0])",
    "opts": [
      "2880",
      "2885",
      "2879",
      "IndexError"
    ],
    "ans": 0,
    "exp": "Index 0 of the list `[2880, 2881, 2882]` is `2880`."
  }
];
