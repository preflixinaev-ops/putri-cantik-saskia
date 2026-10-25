#!/usr/bin/env python3
"""Buat hash PIN untuk config.js.  Pakai: python3 tools/make_pin.py 1234"""
import hashlib, re, sys
salt = re.search(r'pinSalt:\s*"([^"]*)"', open('config.js', encoding='utf-8').read()).group(1)
for pin in sys.argv[1:]:
    print(pin, '->', hashlib.sha256((salt + pin).encode()).hexdigest())
