#!/usr/bin/env python3
import json


s = input("json string:")
d = json.loads(s)
print(json.dumps(d, indent=4, ensure_ascii=False))
