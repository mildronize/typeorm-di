# TypeORM + TypeDI 

[![Build Status](https://travis-ci.org/mildronize/typeorm-di.svg?branch=main)](https://travis-ci.org/mildronize/typeorm-di)

It's just [TypeORM](https://typeorm.io/), [TypeDI](https://github.com/typestack/typedi) and [typeorm-typedi-extensions](https://github.com/typeorm/typeorm-typedi-extensions) wrapper.

You can import all from one place :) 

e.g. 

```bash
import { Connection, createConnection, useContainer , Container} from "typeorm-di";
```


## Installation

```bash 
npm install typeorm typedi typeorm-typedi-extensions reflect-metadata
```

## For building
```
npm install typeorm typedi typeorm-typedi-extensions reflect-metadata @types/node
npm build
```

## Docs

There is only one object that duplicate between `TypeORM` and `TypeDI`: `ObjectType`

In case you want to use `ObjectType`

```
import { ObjectType } from "typeorm-di";  // from `TypeORM`
import { ObjectTypeDI } from "typeorm-di"; //from `TypeDI` 

