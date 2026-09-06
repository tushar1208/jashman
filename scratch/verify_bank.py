import json
import os

js_path = os.path.join(os.path.dirname(__file__), "..", "js", "questions.js")

with open(js_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract JSON portion after "const PYTHON_QUESTION_BANK = "
json_str = content.split("const PYTHON_QUESTION_BANK = ")[1].rstrip(";\n ")
data = json.loads(json_str)

print(f"--- Question Bank Verification ---")
print(f"Total Questions: {len(data)}")

assert len(data) >= 1500, f"Expected at least 1500 questions, got {len(data)}"

topics = {}
levels = {}
seen_ids = set()
seen_questions = set()

for idx, item in enumerate(data):
    # Field existence check
    for field in ['id', 'topic', 'level', 'q', 'opts', 'ans', 'exp']:
        assert field in item, f"Question at index {idx} missing field '{field}'"
    
    # ID uniqueness check
    assert item['id'] not in seen_ids, f"Duplicate ID found: {item['id']}"
    seen_ids.add(item['id'])
    
    # Options check
    assert isinstance(item['opts'], list) and len(item['opts']) == 4, f"Invalid opts in question {item['id']}: {item['opts']}"
    
    # Answer index check
    assert isinstance(item['ans'], int) and 0 <= item['ans'] <= 3, f"Invalid answer index in question {item['id']}: {item['ans']}"
    
    # Topic & level validation
    valid_topics = ['datatype', 'conditional statement', 'loops', 'module', 'functions', 'operators']
    valid_levels = ['basic', 'intermediate', 'advance']
    assert item['topic'] in valid_topics, f"Invalid topic in question {item['id']}: {item['topic']}"
    assert item['level'] in valid_levels, f"Invalid level in question {item['id']}: {item['level']}"
    
    topics[item['topic']] = topics.get(item['topic'], 0) + 1
    levels[item['level']] = levels.get(item['level'], 0) + 1

print("\nDistribution by Topic:")
for t, count in topics.items():
    print(f"  - {t}: {count}")

print("\nDistribution by Level:")
for l, count in levels.items():
    print(f"  - {l}: {count}")

print("\nSUCCESS! All 1500+ questions passed verification perfectly!")
