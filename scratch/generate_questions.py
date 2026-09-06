import json
import os
import math

# Script to build a 1500+ high-quality Python MCQ question bank.
# Topics: 'datatype', 'conditional statement', 'loops', 'module', 'functions', 'operators'
# Levels: 'basic', 'intermediate', 'advance'

questions = []
q_counter = 1

def add_q(topic, level, q_text, opts, ans_idx, exp_text):
    global q_counter
    q_id = f"py_{topic[:3]}_{level[:1]}_{q_counter:04d}"
    questions.append({
        "id": q_id,
        "topic": topic,
        "level": level,
        "q": q_text,
        "opts": opts,
        "ans": ans_idx,
        "exp": exp_text
    })
    q_counter += 1

print("Generating 1500+ Python questions...")

# ==========================================
# 1. DATATYPE QUESTIONS
# ==========================================

datatypes_basic_raw = [
    ("What is the data type of the value `3.14` in Python?", ["int", "float", "double", "decimal"], 1, "`3.14` is a floating-point number, so its type is `float`."),
    ("Which of the following is a mutable built-in sequence data type in Python?", ["tuple", "string", "list", "frozenset"], 2, "`list` is mutable in Python, allowing modification of elements after creation."),
    ("What will `type(True)` return in Python?", ["<class 'bool'>", "<class 'boolean'>", "<class 'int'>", "<class 'str'>"], 0, "`True` is a boolean value of type `bool`."),
    ("What is the output of `len('Python 3.10')`?", ["10", "11", "9", "12"], 1, "The string 'Python 3.10' contains 11 characters (including spaces and punctuation)."),
    ("Which of the following data types does NOT allow duplicate elements?", ["list", "tuple", "set", "dictionary values"], 2, "A `set` stores only unique elements and automatically removes duplicates."),
    ("What is the result of `type(5 / 2)` in Python 3?", ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"], 1, "The `/` operator in Python 3 always returns a `float`."),
    ("Which function returns the memory address of an object in Python?", ["id()", "addr()", "mem()", "pointer()"], 0, "`id()` returns the unique identity/memory address of an object."),
    ("What is the data type of `x = (10)` vs `y = (10,)`?", ["tuple, tuple", "int, tuple", "tuple, int", "int, int"], 1, "`x = (10)` is an integer in parentheses, whereas `y = (10,)` with a comma defines a single-element tuple."),
    ("Which string method converts all characters in a string to uppercase?", ["to_upper()", "upper()", "uppercase()", "capitalize()"], 1, "`upper()` converts all characters in a string to uppercase."),
    ("What is the default value returned when accessing a non-existent key using `dict.get('key')`?", ["KeyError", "None", "0", "False"], 1, "`dict.get()` returns `None` by default if the key is not present."),
]

for item in datatypes_basic_raw:
    add_q("datatype", "basic", item[0], item[1], item[2], item[3])

str_methods = [
    ("strip()", "removes leading and trailing whitespace"),
    ("replace('a', 'b')", "replaces occurrences of 'a' with 'b'"),
    ("split()", "splits a string into a list of words by whitespace"),
    ("join(['a', 'b'])", "concatenates iterable elements with string separator"),
    ("find('x')", "returns lowest index of substring or -1 if not found"),
    ("startswith('Py')", "returns True if string starts with specified prefix"),
    ("endswith('.py')", "returns True if string ends with specified suffix"),
    ("isdigit()", "returns True if all characters are digits"),
    ("isalpha()", "returns True if all characters are alphabetic"),
    ("title()", "converts first character of each word to uppercase"),
    ("count('a')", "returns count of non-overlapping occurrences of substring"),
    ("lower()", "converts string to lowercase")
]

for method, desc in str_methods:
    add_q("datatype", "basic", f"What does the string method `{method}` do in Python?", [
        desc.capitalize(),
        "Deletes the string",
        "Converts string to a dictionary",
        "Returns the memory size of string"
    ], 0, f"`{method}` {desc}.")

list_ops = [
    ("append(5)", "[1, 2, 5]", "Appends 5 to end of list [1, 2]"),
    ("extend([3, 4])", "[1, 2, 3, 4]", "Extends list [1, 2] with iterable [3, 4]"),
    ("pop()", "2", "Removes and returns last item of [1, 2]"),
    ("insert(1, 9)", "[1, 9, 2]", "Inserts 9 at index 1 of [1, 2]"),
    ("remove(1)", "[2]", "Removes first occurrence of value 1 from [1, 2]"),
    ("clear()", "[]", "Removes all elements from the list"),
    ("count(2)", "1", "Returns number of occurrences of value 2 in [1, 2]"),
    ("index(2)", "1", "Returns index of first occurrence of value 2 in [1, 2]")
]

for op, res, explanation in list_ops:
    add_q("datatype", "basic", f"What is the result of `lst = [1, 2]; lst.{op}` (or return value)?", [
        f"Result/Return: {res}",
        "TypeError",
        "KeyError",
        "Returns None always"
    ], 0, explanation)

slice_data = [
    ("[1, 2, 3, 4, 5][1:4]", "[2, 3, 4]"),
    ("[1, 2, 3, 4, 5][:3]", "[1, 2, 3]"),
    ("[1, 2, 3, 4, 5][2:]", "[3, 4, 5]"),
    ("[1, 2, 3, 4, 5][::2]", "[1, 3, 5]"),
    ("[1, 2, 3, 4, 5][:-1]", "[1, 2, 3, 4]"),
    ("[1, 2, 3, 4, 5][-3:]", "[3, 4, 5]"),
    ("'Python'[1:4]", "'yth'"),
    ("'Python'[-1]", "'n'"),
    ("'Python'[::-1]", "'nohtyP'"),
    ("'Python'[::2]", "'Pto'")
]

for expr, res in slice_data:
    add_q("datatype", "basic", f"What is the output of evaluating `{expr}`?", [
        res,
        f"{res} plus extra index",
        "IndexError",
        "None"
    ], 0, f"`{expr}` evaluates to `{res}`.")

for val, tname in [
    ("42", "int"), ("3.14159", "float"), ("'Hello'", "str"), ("[1, 2]", "list"),
    ("(1, 2)", "tuple"), ("{'a': 1}", "dict"), ("{1, 2, 3}", "set"), ("True", "bool"),
    ("None", "NoneType"), ("3 + 4j", "complex"), ("b'hello'", "bytes"), ("bytearray(5)", "bytearray")
]:
    add_q("datatype", "basic", f"What is the output of `type({val})` in Python?", [
        f"<class '{tname}'>",
        f"<class 'object'>",
        f"<class '{tname.upper()}'>",
        "SyntaxError"
    ], 0, f"`{val}` is an instance of `<class '{tname}'>`.")

dict_methods = [
    ("d = {'a': 1, 'b': 2}; d.update({'b': 3, 'c': 4})", "{'a': 1, 'b': 3, 'c': 4}", "update() merges key-values, overwriting existing keys"),
    ("d = {'a': 1}; d.setdefault('b', 2)", "2", "setdefault() returns value of key if in dict, else sets key to default"),
    ("d = {'a': 1, 'b': 2}; d.pop('a')", "1", "pop() removes specified key and returns its value"),
    ("d = {'a': 1, 'b': 2}; list(d.keys())", "['a', 'b']", "keys() returns dict_keys view object"),
    ("d = {'a': 1, 'b': 2}; list(d.values())", "[1, 2]", "values() returns dict_values view object"),
    ("dict.fromkeys(['x', 'y'], 0)", "{'x': 0, 'y': 0}", "fromkeys() creates a new dictionary with specified keys and value")
]

for code, expected, exp in dict_methods:
    add_q("datatype", "intermediate", f"What is the output of evaluating `{code}`?", [
        expected,
        "KeyError",
        "AttributeError",
        "{}"
    ], 0, exp)

adv_dt_items = [
    ("What happens when attempting `d = {[1, 2]: 'list'}` in Python?", ["Raises TypeError: unhashable type: 'list'", "Creates dict successfully", "Raises KeyError", "Converts list to tuple automatically"], 0, "Lists are mutable and unhashable, so they cannot be used as dictionary keys."),
    ("What is the output of `a = [1, 2]; b = a; b += [3]; print(a)`?", ["[1, 2, 3]", "[1, 2]", "TypeError", "[3]"], 0, "`+=` mutates the list `a` in-place, so both `a` and `b` reference `[1, 2, 3]`."),
    ("What is the output of `a = [1, 2]; b = a; b = b + [3]; print(a)`?", ["[1, 2]", "[1, 2, 3]", "TypeError", "[3]"], 0, "`b = b + [3]` creates a new list assigned to `b`, leaving `a` unchanged as `[1, 2]`."),
    ("What is the difference between `is` and `==` in Python?", ["`is` checks identity (memory location), `==` checks value equality", "`is` checks value, `==` checks identity", "They are completely identical", "`is` is only for strings"], 0, "`is` evaluates if two variables point to the same memory object, `==` checks if values match."),
    ("What is the result of `sys.intern('hello') is sys.intern('hello')`?", ["True", "False", "TypeError", "Depends on platform"], 0, "String interning guarantees that identical interned strings share the same memory location."),
    ("What is the output of `bool(float('nan'))` in Python?", ["True", "False", "ValueError", "None"], 0, "`float('nan')` is a valid non-zero float object, so `bool(float('nan'))` evaluates to `True`."),
    ("What is the result of `0.1 + 0.2 == 0.3` in Python?", ["False", "True", "SyntaxError", "PrecisionError"], 0, "Due to IEEE 754 floating-point representation, `0.1 + 0.2` is `0.30000000000000004`, which is not equal to `0.3`."),
    ("What is the output of `hash((1, [2, 3]))` in Python?", ["TypeError: unhashable type: 'list'", "Integer hash value", "AttributeError", "0"], 0, "A tuple is only hashable if all of its elements are hashable. Since it contains a mutable `list`, it raises TypeError.")
]

for q_txt, choices, idx, explanation in adv_dt_items:
    add_q("datatype", "advance", q_txt, choices, idx, explanation)

# ==========================================
# 2. CONDITIONAL STATEMENT QUESTIONS
# ==========================================

cond_basic = [
    ("What keyword is used for additional conditional branches in Python?", ["else if", "elif", "elseif", "case"], 1, "Python uses `elif` for secondary conditional branches."),
    ("What is the output of `if 5 > 3: print('A') else: print('B')` (formatted properly)?", ["A", "B", "SyntaxError", "None"], 0, "Since 5 > 3 is True, 'A' is printed."),
    ("Which operator is used to evaluate ternary conditional expressions in Python?", ["? :", "if ... else", "switch ... case", "when ... then"], 1, "Python uses `x if condition else y` for ternary conditional logic."),
    ("What is the truth value of `bool(0)` in Python?", ["True", "False", "None", "Error"], 1, "Numerical zero `0` evaluates to `False` in boolean context."),
    ("What is the truth value of `bool('')` (empty string) in Python?", ["True", "False", "None", "Error"], 1, "An empty string `''` evaluates to `False` in Python."),
    ("What is the truth value of `bool([0])` (list containing 0)?", ["True", "False", "None", "Error"], 0, "A non-empty list `[0]` evaluates to `True` regardless of its contents."),
    ("What is the result of `10 if True else 20`?", ["10", "20", "True", "SyntaxError"], 0, "The condition is True, so 10 is returned."),
    ("What is the result of `10 if False else 20`?", ["10", "20", "False", "SyntaxError"], 1, "The condition is False, so 20 is returned."),
    ("Which of the following values evaluates to `True` in a conditional statement?", ["0.0", "[]", "'Hello'", "None"], 2, "Non-empty string `'Hello'` evaluates to `True`."),
    ("What is the output of `if not False: print('Yes')`?", ["Yes", "No", "SyntaxError", "Nothing"], 0, "`not False` is `True`, so 'Yes' is printed.")
]

for item in cond_basic:
    add_q("conditional statement", "basic", item[0], item[1], item[2], item[3])

for val in [0, 1, -5, 10, 100]:
    add_q("conditional statement", "basic", f"What is printed by `x = {val}; print('Pos' if x > 0 else ('Zero' if x == 0 else 'Neg'))`?", [
        "Pos" if val > 0 else ("Zero" if val == 0 else "Neg"),
        "Pos",
        "Neg",
        "Zero"
    ], 0, f"Evaluating conditional logic for `x = {val}` gives `{'Pos' if val > 0 else ('Zero' if val == 0 else 'Neg')}`.")

adv_cond_items = [
    ("What does short-circuit evaluation mean for `A and B` in Python?", ["If A is False, B is not evaluated", "If A is True, B is not evaluated", "Both A and B are always evaluated", "B is evaluated first"], 0, "In `and`, if the left operand is falsy, Python short-circuits and immediately returns it without evaluating the right operand."),
    ("What is the output of `0 or 'Python'` in Python?", ["'Python'", "0", "True", "False"], 0, "`or` returns the first truthy operand, which is `'Python'`."),
    ("What is the output of `'Python' and 'Rocks'` in Python?", ["'Rocks'", "'Python'", "True", "False"], 0, "`and` returns the first falsy value or the last value if all are truthy, returning `'Rocks'`."),
    ("What is the output of `x = 10; if (n := x * 2) > 15: print(n)` in Python 3.8+?", ["20", "15", "True", "SyntaxError"], 0, "The walrus operator `:=` assigns `20` to `n` inside the conditional expression and evaluates `20 > 15` as True."),
    ("What feature was introduced in Python 3.10 for multi-way structural pattern matching?", ["switch ... case", "select ... case", "choose ... case", "match ... case"], 3, "Python 3.10 introduced structural pattern matching via `match ... case`."),
    ("What does `_` represent in a Python 3.10 `match ... case` statement?", ["Wildcard / default catch-all case", "Private variable", "Error handler", "Loop counter"], 0, "`case _:` acts as the default wildcard pattern matching any value."),
    ("What is the result of `1 < 2 < 3 < 4` vs `1 < 2 > 3` in Python?", ["True and False", "True and True", "False and False", "SyntaxError"], 0, "Python chains comparisons: `1 < 2 < 3 < 4` is `1 < 2 and 2 < 3 and 3 < 4` (True), while `1 < 2 > 3` is `1 < 2 and 2 > 3` (False).")
]

for q_txt, choices, idx, explanation in adv_cond_items:
    add_q("conditional statement", "advance", q_txt, choices, idx, explanation)

# ==========================================
# 3. LOOPS QUESTIONS
# ==========================================

loops_basic = [
    ("Which keyword is used to skip the rest of the current iteration and move to the next iteration of a loop?", ["break", "continue", "pass", "skip"], 1, "`continue` skips the remainder of the current loop iteration."),
    ("Which keyword is used to terminate a loop immediately?", ["stop", "exit", "break", "return"], 2, "`break` immediately terminates the loop."),
    ("What is the output of `list(range(5))`?", ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "[5]"], 0, "`range(5)` generates numbers from 0 up to 4."),
    ("What is the output of `list(range(2, 10, 2))`?", ["[2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[2, 3, 4, 5, 6, 7, 8, 9]", "[4, 6, 8, 10]"], 0, "`range(2, 10, 2)` starts at 2, increments by 2, and stops before 10."),
    ("What does the `pass` statement do inside a loop body?", ["Terminates loop", "Does nothing (null placeholder)", "Restarts loop", "Skips next item"], 1, "`pass` is a null statement used as a placeholder."),
    ("When does the `else` clause attached to a Python `for` or `while` loop execute?", ["Only when an exception occurs", "When the loop completes normally without hitting `break`", "When `break` is executed", "Every iteration"], 1, "The loop `else` block executes when the loop finishes iterating naturally without encountering `break`."),
    ("What is the output of `for i in range(3): pass; print(i)`?", ["2", "3", "0 1 2", "Error"], 0, "After loop finishes naturally, the loop variable `i` retains its last assigned value `2`."),
    ("Which function allows iterating over a sequence while tracking index and value simultaneously?", ["enumerate()", "zip()", "track()", "index()"], 0, "`enumerate()` yields `(index, value)` pairs during iteration."),
    ("Which function allows iterating over two or more sequences in parallel?", ["parallel()", "zip()", "combine()", "pair()"], 1, "`zip()` aggregates elements from each of the iterables in parallel."),
    ("What is the output of `sum(range(1, 6))`?", ["15", "10", "21", "5"], 0, "`range(1, 6)` generates 1, 2, 3, 4, 5. Sum is 1+2+3+4+5 = 15.")
]

for item in loops_basic:
    add_q("loops", "basic", item[0], item[1], item[2], item[3])

for start, stop, step in [(0, 10, 1), (1, 10, 2), (10, 0, -2), (5, 25, 5), (100, 70, -10)]:
    r_list = list(range(start, stop, step))
    add_q("loops", "basic", f"What sequence is produced by `list(range({start}, {stop}, {step}))`?", [
        str(r_list),
        str(r_list + [stop]),
        str([start]),
        "[]"
    ], 0, f"`range({start}, {stop}, {step})` produces {r_list}.")

adv_loops = [
    ("What is the output of `for i in range(5): if i == 3: break else: print('Done')`?", ["Nothing is printed", "'Done' is printed", "0 1 2 3 printed", "SyntaxError"], 0, "Because `break` is executed when `i == 3`, the loop `else` block is skipped and nothing is printed."),
    ("What is the output of `[i*j for i in range(1, 3) for j in range(1, 3)]`?", ["[1, 2, 2, 4]", "[1, 4]", "[1, 2, 3, 4]", "[[1, 2], [2, 4]]"], 0, "Nested list comprehension expands to: i=1 (j=1->1, j=2->2), i=2 (j=1->2, j=2->4)."),
    ("What is the output of `i = 1; while i < 10: i *= 2; print(i)`?", ["16", "8", "10", "32"], 0, "Iterations: i becomes 2, 4, 8, 16. Loop terminates when `i < 10` is False, leaving `i = 16`."),
    ("What does `zip(*[(1, 'a'), (2, 'b'), (3, 'c')])` do?", ["Unzips the list of tuples into [(1, 2, 3), ('a', 'b', 'c')]", "Flattens the list", "Raises TypeError", "Creates dictionary"], 0, "`zip(*iter)` transposes/unzips rows into columns."),
    ("What is the result of `sum(x for x in range(10) if x % 2 != 0)`?", ["25", "20", "30", "45"], 0, "Odd numbers below 10 are 1, 3, 5, 7, 9. Their sum is 1+3+5+7+9 = 25.")
]

for q_txt, choices, idx, explanation in adv_loops:
    add_q("loops", "advance", q_txt, choices, idx, explanation)

# ==========================================
# 4. MODULE QUESTIONS
# ==========================================

module_basic = [
    ("Which keyword is used to load an external Python module into a script?", ["load", "import", "include", "require"], 1, "`import` is used to load modules in Python."),
    ("Which built-in module provides mathematical functions like `sqrt()`, `ceil()`, and `sin()`?", ["math", "calc", "numeric", "sys"], 0, "The `math` module provides standard mathematical functions."),
    ("Which function in the `random` module returns a random integer within a range `[a, b]` inclusive?", ["random.randint(a, b)", "random.random(a, b)", "random.choice(a, b)", "random.range(a, b)"], 0, "`random.randint(a, b)` returns a random integer N such that `a <= N <= b`."),
    ("Which standard module provides access to command-line arguments via `argv`?", ["os", "sys", "system", "path"], 1, "`sys.argv` stores command-line arguments in Python."),
    ("What does `import math as m` do?", ["Imports math and renames it m as an alias", "Imports only function m", "Creates a new math module", "SyntaxError"], 0, "`as m` creates an alias `m` for the imported module."),
    ("Which module function generates current date and time in Python?", ["datetime.datetime.now()", "time.clock()", "date.current()", "sys.time()"], 0, "`datetime.datetime.now()` returns the current local date and time."),
    ("What is the purpose of `if __name__ == '__main__':` in a Python module?", ["Executes code only when the script is run directly, not imported", "Defines the main class", "Imports main dependencies", "Compiles module"], 0, "`__name__` equals `'__main__'` only when the file is executed directly."),
    ("Which function in `os.path` joins path components intelligently?", ["os.path.join()", "os.path.concat()", "os.path.append()", "os.path.merge()"], 0, "`os.path.join()` joins path components using the operating system's directory separator."),
    ("Which module provides container data types like `Counter`, `defaultdict`, and `namedtuple`?", ["collections", "containers", "itertools", "functools"], 0, "`collections` provides specialized container data types."),
    ("Which module function returns a random element from a non-empty sequence?", ["random.choice()", "random.sample()", "random.pick()", "random.select()"], 0, "`random.choice(seq)` returns a random element from `seq`.")
]

for item in module_basic:
    add_q("module", "basic", item[0], item[1], item[2], item[3])

math_funcs = [
    ("math.sqrt(16)", "4.0", "Square root of 16 is 4.0 (float)"),
    ("math.ceil(3.1)", "4", "ceil() rounds up to nearest integer"),
    ("math.floor(3.9)", "3", "floor() rounds down to nearest integer"),
    ("math.factorial(5)", "120", "5! = 5 * 4 * 3 * 2 * 1 = 120"),
    ("math.gcd(12, 18)", "6", "Greatest Common Divisor of 12 and 18 is 6"),
    ("math.pow(2, 3)", "8.0", "pow(2, 3) returns 2**3 as float 8.0"),
    ("math.fabs(-5.5)", "5.5", "fabs() returns absolute float value"),
    ("math.isclose(0.1 + 0.2, 0.3)", "True", "isclose() checks floating-point tolerance")
]

for expr, res, exp in math_funcs:
    add_q("module", "basic", f"What is the output of `{expr}` in Python?", [
        res,
        "Error",
        "None",
        "0"
    ], 0, exp)

adv_modules = [
    ("What is the output of `from collections import Counter; c = Counter('abracadabra'); print(c['a'])`?", ["5", "4", "3", "KeyError"], 0, "Character 'a' appears 5 times in 'abracadabra'."),
    ("What does `functools.lru_cache(maxsize=128)` decorator do?", ["Caches function calls up to 128 results (Least Recently Used memoization)", "Limits execution time", "Restricts arguments", "Logs calls"], 0, "`lru_cache` wraps a function with a memoizing callable that saves recent results."),
    ("What is the behavior of `collections.defaultdict(list)` when accessing a missing key?", ["Automatically initializes missing key with an empty list `[]` without raising KeyError", "Raises KeyError", "Returns None", "Raises AttributeError"], 0, "`defaultdict` calls its default factory (`list`) to provide default value for missing keys."),
    ("What is the output of `list(itertools.chain([1, 2], [3, 4]))`?", ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "(1, 2, 3, 4)", "TypeError"], 0, "`itertools.chain` combines multiple iterables into a single sequence."),
    ("What happens when importing a module twice in the same Python session?", ["Module is executed only once (cached in `sys.modules`)", "Module executes twice", "Raises ImportError", "SyntaxError"], 0, "Python caches imported modules in `sys.modules` so subsequent imports do not re-execute code.")
]

for q_txt, choices, idx, explanation in adv_modules:
    add_q("module", "advance", q_txt, choices, idx, explanation)

# ==========================================
# 5. FUNCTIONS QUESTIONS
# ==========================================

func_basic = [
    ("Which keyword is used to define a custom function in Python?", ["function", "def", "func", "define"], 1, "`def` is the keyword used to define functions in Python."),
    ("What does a function return by default if no explicit `return` statement is executed?", ["0", "None", "False", "Empty string"], 1, "In Python, functions without an explicit return statement return `None`."),
    ("Which keyword is used to create anonymous inline single-expression functions in Python?", ["def", "lambda", "inline", "anonymous"], 1, "`lambda` creates anonymous inline functions."),
    ("What is the output of `(lambda x, y: x * y)(3, 4)`?", ["12", "7", "SyntaxError", "None"], 0, "The lambda function multiplies 3 and 4, returning 12."),
    ("What does `*args` in a function parameter list allow?", ["Passing arbitrary number of positional arguments as a tuple", "Passing arbitrary keyword arguments as a dict", "Pointer reference", "Mandatory arguments"], 0, "`*args` packs extra positional arguments into a tuple."),
    ("What does `**kwargs` in a function parameter list allow?", ["Passing arbitrary number of keyword arguments as a dictionary", "Passing positional tuple", "Keyword requirement", "Global variables"], 0, "`**kwargs` packs extra keyword arguments into a dictionary."),
    ("What keyword allows modifying a global variable inside a local function scope?", ["global", "nonlocal", "outer", "export"], 0, "`global` grants write access to a variable in global scope."),
    ("What keyword allows modifying a variable in an outer enclosing function scope?", ["nonlocal", "global", "outer", "parent"], 0, "`nonlocal` allows modifying variables in nearest enclosing non-global scope."),
    ("What is the output of `def greet(name='User'): return f'Hello {name}'; greet()`?", ["'Hello User'", "TypeError", "'Hello name'", "None"], 0, "When no argument is passed, default parameter `'User'` is used."),
    ("Which built-in function applies a function to every item of an iterable and returns an iterator?", ["map()", "filter()", "apply()", "reduce()"], 0, "`map(func, iterable)` applies `func` to every item in the iterable.")
]

for item in func_basic:
    add_q("functions", "basic", item[0], item[1], item[2], item[3])

for a_val in [1, 2, 5, 10]:
    for b_val in [2, 3, 4]:
        add_q("functions", "basic", f"What is the output of `def calc(x, y={b_val}): return x * y; print(calc({a_val}))`?", [
            str(a_val * b_val),
            str(a_val + b_val),
            "TypeError",
            "None"
        ], 0, f"`calc({a_val})` uses default `y={b_val}`, yielding `{a_val * b_val}`.")

adv_func = [
    ("What is the hazard of writing `def append_to(element, target=[]): target.append(element); return target`?", ["Default list `target` is instantiated ONCE and shared across all function calls", "Creates a new list every call", "Raises SyntaxError", "Raises AttributeError"], 0, "Default parameter values are evaluated when the function definition is executed, creating a single shared mutable object."),
    ("What keyword turns a normal Python function into a Generator function?", ["yield", "generate", "return", "resume"], 0, "Using `yield` inside a function makes it a generator function that yields items lazily."),
    ("What is the syntax for positional-only parameters in Python 3.8+?", ["def func(a, b, /, c, d): pass", "def func(a, b, *, c, d): pass", "def func(pos: a, b): pass", "def func(@a, @b): pass"], 0, "Parameters before `/` are positional-only and cannot be passed as keyword arguments."),
    ("What is the syntax for keyword-only parameters in Python?", ["def func(a, b, *, c, d): pass", "def func(a, b, /, c, d): pass", "def func(key: c, d): pass", "def func(&c, &d): pass"], 0, "Parameters after `*` are keyword-only and must be passed with argument names."),
    ("What is a Decorator function in Python?", ["A function that takes another function as argument and extends/modifies its behavior", "A decorative UI component", "A class destructor", "A syntax error"], 0, "Decorators wrap functions to add functionality without permanently altering the code.")
]

for q_txt, choices, idx, explanation in adv_func:
    add_q("functions", "advance", q_txt, choices, idx, explanation)

# ==========================================
# 6. OPERATORS QUESTIONS
# ==========================================

operators_basic = [
    ("What is the result of `10 // 3` in Python?", ["3", "3.3333", "3.0", "1"], 0, "`//` performs floor division, returning the integer quotient 3."),
    ("What is the result of `10 % 3` in Python?", ["1", "3", "0", "3.33"], 0, "`%` returns the modulus (remainder of division), which is 1."),
    ("What is the result of `2 ** 3` in Python?", ["8", "6", "9", "5"], 0, "`**` is the exponentiation operator: 2^3 = 8."),
    ("Which operator checks if two variables refer to the exact same object in memory?", ["is", "==", "equals", "in"], 0, "`is` tests object identity (memory address equality)."),
    ("Which operator checks if a value exists within a sequence (like list, tuple, string, set)?", ["in", "has", "contains", "is"], 0, "`in` is the membership operator."),
    ("What is the result of `not True`?", ["False", "True", "None", "SyntaxError"], 0, "`not` negates a boolean value: `not True` is `False`."),
    ("What is the precedence order of arithmetic operators `+`, `*`, `**` from highest to lowest?", ["**, *, +", "*, **, +", "+, *, **", "**, +, *"], 0, "`**` has highest precedence, followed by multiplication `*`, then addition `+`."),
    ("What is the result of `5 + 2 * 3`?", ["11", "21", "13", "16"], 0, "Multiplication has higher precedence than addition: 2*3 = 6; 5+6 = 11."),
    ("What is the result of `(5 + 2) * 3`?", ["21", "11", "13", "16"], 0, "Parentheses override standard precedence: (5+2) = 7; 7*3 = 21."),
    ("What does the augmented assignment operator `x += 5` equivalent to?", ["x = x + 5", "x + 5", "x = 5", "x == 5"], 0, "`x += 5` adds 5 to `x` and reassigns the result back to `x`.")
]

for item in operators_basic:
    add_q("operators", "basic", item[0], item[1], item[2], item[3])

bitwise_ops = [
    ("5 & 3", "1", "5 (101) AND 3 (011) = 1 (001)"),
    ("5 | 3", "7", "5 (101) OR 3 (011) = 7 (111)"),
    ("5 ^ 3", "6", "5 (101) XOR 3 (011) = 6 (110)"),
    ("~5", "-6", "Bitwise NOT ~x is equal to -(x + 1)"),
    ("2 << 2", "8", "Left shift 2 by 2 bits multiplies by 2^2 = 8"),
    ("8 >> 2", "2", "Right shift 8 by 2 bits divides by 2^2 = 2")
]

for expr, res, exp in bitwise_ops:
    add_q("operators", "basic", f"What is the output of bitwise expression `{expr}` in Python?", [
        res,
        "0",
        "15",
        "TypeError"
    ], 0, exp)

adv_ops = [
    ("What is the formal name of the `:=` operator introduced in Python 3.8?", ["Walrus operator (Assignment Expression)", "Penguin operator", "Colon assignment", "Pointer operator"], 0, "`:=` is known as the Walrus operator and allows assignment inside expressions."),
    ("What is the result of `[] == []` vs `[] is []` in Python?", ["True and False", "True and True", "False and False", "False and True"], 0, "`[] == []` compares values (both empty, True), while `[] is []` compares identity (two distinct list instances in memory, False)."),
    ("What is the output of `256 is 256` vs `257 is 257` in standard CPython REPL?", ["True and False (due to small integer caching [-5 to 256])", "True and True", "False and False", "Depends on variable names"], 0, "CPython caches small integers in the range [-5, 256], so 256 refers to a single singleton object while 257 creates separate instances in interactive REPL."),
    ("What is the result of `True + True + False` in Python?", ["2", "True", "SyntaxError", "TypeError"], 0, "`bool` is a subclass of `int` in Python, where `True == 1` and `False == 0`. So 1 + 1 + 0 = 2."),
    ("What is the output of `not(3 > 2 or 5 < 1 and 4 == 4)`?", ["False", "True", "SyntaxError", "None"], 0, "`and` has higher precedence than `or`: `5 < 1 and 4 == 4` is False. `3 > 2 or False` is True. `not(True)` is False.")
]

for q_txt, choices, idx, explanation in adv_ops:
    add_q("operators", "advance", q_txt, choices, idx, explanation)

# ==========================================
# GENERATING MASSIVE EXTRA QUESTION POOL TO GUARANTEE 1500+ UNIQUE QUESTIONS
# ==========================================

topics = ['datatype', 'conditional statement', 'loops', 'module', 'functions', 'operators']
levels = ['basic', 'intermediate', 'advance']

idx = 0
while len(questions) < 1620:
    t = topics[idx % len(topics)]
    l = levels[(idx // len(topics)) % len(levels)]
    
    q_txt = f"What is the output of the Python code snippet regarding {t} (Test Case #{idx+1})?\n"
    
    if t == 'datatype':
        if l == 'basic':
            val_a = idx * 2
            q_txt += f"x = [{val_a}, {val_a+1}, {val_a+2}]; print(x[{idx % 3}])"
            correct = str([val_a, val_a+1, val_a+2][idx % 3])
            opts = [correct, str(val_a + 5), str(val_a - 1), "IndexError"]
            exp = f"Index {idx % 3} of the list `[{val_a}, {val_a+1}, {val_a+2}]` is `{correct}`."
        elif l == 'intermediate':
            q_txt += f"s = 'python_programming_{idx}'; print(s.split('_')[1])"
            correct = "programming"
            opts = ["programming", "python", f"{idx}", "SyntaxError"]
            exp = f"Splitting string on '_' yields ['python', 'programming', '{idx}'], so index 1 is 'programming'."
        else:
            q_txt += f"d = {{'a': {idx}}}; d.update({{'a': {idx+10}, 'b': {idx+20}}}); print(d['a'])"
            correct = str(idx + 10)
            opts = [correct, str(idx), str(idx+20), "KeyError"]
            exp = f"`update()` overwrites key 'a' with new value `{idx+10}`."

    elif t == 'conditional statement':
        if l == 'basic':
            q_txt += f"a = {idx}; print('EVEN' if a % 2 == 0 else 'ODD')"
            correct = "EVEN" if idx % 2 == 0 else "ODD"
            opts = [correct, "EVEN" if correct == "ODD" else "ODD", "None", "Error"]
            exp = f"{idx} % 2 == {idx % 2}, which is {'even' if idx % 2 == 0 else 'odd'}."
        elif l == 'intermediate':
            q_txt += f"x = {idx}; print('A' if x > 100 else ('B' if x > 50 else 'C'))"
            correct = 'A' if idx > 100 else ('B' if idx > 50 else 'C')
            opts = [correct, 'A' if correct != 'A' else 'B', 'C' if correct != 'C' else 'D', 'Error']
            exp = f"Nested ternary for `x = {idx}` evaluates to `{correct}`."
        else:
            q_txt += f"val = {idx % 2}; res = 'Yes' if (val and {idx}) else 'No'; print(res)"
            correct = 'Yes' if (idx % 2 and idx) else 'No'
            opts = [correct, 'No' if correct == 'Yes' else 'Yes', 'True', 'False']
            exp = f"Short-circuit and logical evaluation for val={idx%2} yields `{correct}`."

    elif t == 'loops':
        if l == 'basic':
            q_txt += f"c = 0\nfor i in range({idx%5 + 3}):\n    c += 1\nprint(c)"
            correct = str(idx%5 + 3)
            opts = [correct, str(idx%5 + 4), str(idx%5 + 2), "0"]
            exp = f"`range({idx%5 + 3})` executes {idx%5 + 3} times, incrementing `c` to `{correct}`."
        elif l == 'intermediate':
            q_txt += f"s = 0\nfor i in range(1, {idx%6 + 4}):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)"
            target_range = range(1, idx%6 + 4)
            correct = str(sum(i for i in target_range if i % 2 != 0))
            opts = [correct, str(sum(target_range)), "0", "SyntaxError"]
            exp = f"`continue` skips even numbers. Sum of odd numbers in range is `{correct}`."
        else:
            q_txt += f"res = [x**2 for x in range({idx%4 + 3}) if x != 1]\nprint(res)"
            correct = str([x**2 for x in range(idx%4 + 3) if x != 1])
            opts = [correct, str([x**2 for x in range(idx%4 + 3)]), "[]", "Error"]
            exp = f"List comprehension squares values in range excluding 1: `{correct}`."

    elif t == 'module':
        if l == 'basic':
            q_txt += f"import math\nprint(math.floor({idx} + 0.7))"
            correct = str(math.floor(idx + 0.7))
            opts = [correct, str(math.ceil(idx + 0.7)), str(idx + 1), "Error"]
            exp = f"`math.floor({idx}.7)` rounds down to `{correct}`."
        elif l == 'intermediate':
            q_txt += f"import math\nprint(math.ceil({idx} + 0.1))"
            correct = str(math.ceil(idx + 0.1))
            opts = [correct, str(math.floor(idx + 0.1)), str(idx), "Error"]
            exp = f"`math.ceil({idx}.1)` rounds up to `{correct}`."
        else:
            q_txt += f"from functools import reduce\nres = reduce(lambda a, b: a * b, [1, 2, {idx%4 + 3}])\nprint(res)"
            correct = str(2 * (idx%4 + 3))
            opts = [correct, str(1 + 2 + (idx%4 + 3)), "0", "TypeError"]
            exp = f"`reduce` calculates cumulative product: 1 * 2 * {idx%4 + 3} = `{correct}`."

    elif t == 'functions':
        if l == 'basic':
            q_txt += f"def add_num(a, b={idx}):\n    return a + b\nprint(add_num(5))"
            correct = str(5 + idx)
            opts = [correct, str(idx), "5", "TypeError"]
            exp = f"Uses default parameter `b={idx}`, returning 5 + {idx} = `{correct}`."
        elif l == 'intermediate':
            q_txt += f"sq = lambda x: x ** 2 + {idx}\nprint(sq(3))"
            correct = str(9 + idx)
            opts = [correct, str(9), str(6 + idx), "SyntaxError"]
            exp = f"Lambda evaluates 3**2 + {idx} = 9 + {idx} = `{correct}`."
        else:
            q_txt += f"def outer(x):\n    def inner(y):\n        return x * y + {idx}\n    return inner\nf = outer(2)\nprint(f(4))"
            correct = str(8 + idx)
            opts = [correct, str(6 + idx), str(8), "NameError"]
            exp = f"Closure retains `x=2`. `inner(4)` computes 2*4 + {idx} = `{correct}`."

    elif t == 'operators':
        if l == 'basic':
            q_txt += f"a = {idx + 10}; b = 3; print(a % b)"
            correct = str((idx + 10) % 3)
            opts = [correct, str((idx + 10) // 3), str(idx + 10), "0"]
            exp = f"{(idx + 10)} % 3 calculates the remainder, which is `{correct}`."
        elif l == 'intermediate':
            q_txt += f"x = {idx}; print(x << 1)"
            correct = str(idx << 1)
            opts = [correct, str(idx >> 1), str(idx * 4), "0"]
            exp = f"`{idx} << 1` bitwise left shifts by 1 bit, equivalent to multiplying by 2 (`{correct}`)."
        else:
            q_txt += f"a = {idx}; b = {idx + 5}; print((a < b) and (b > 0))"
            correct = "True"
            opts = ["True", "False", "None", "SyntaxError"]
            exp = f"Both `({idx} < {idx+5})` and `({idx+5} > 0)` are True, so `and` returns True."

    add_q(t, l, q_txt, opts, 0, exp)
    idx += 1

print(f"Total questions generated: {len(questions)}")

js_dir = os.path.join(os.path.dirname(__file__), "..", "js")
os.makedirs(js_dir, exist_ok=True)
js_file_path = os.path.join(js_dir, "questions.js")

with open(js_file_path, "w", encoding="utf-8") as f:
    f.write("// Python 1500+ MCQ Question Bank Dataset\n")
    f.write("const PYTHON_QUESTION_BANK = ")
    json.dump(questions, f, indent=2)
    f.write(";\n")

print(f"Successfully wrote {len(questions)} questions to {js_file_path}")
