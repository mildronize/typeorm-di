export * from "typeorm";
export * from "typeorm-typedi-extensions";
export {
    Container, 
    ContainerInstance, 
    Token, 
    Handler, 
    ServiceOptions, 
    ServiceIdentifier, 
    ServiceMetadata
} from "typedi";
// export from 'typedi/decorators/Service'
export { Service, ObjectType as ObjectTypeDI} from 'typedi/decorators/Service';
export * from 'typedi/decorators/Inject';
export * from 'typedi/decorators/InjectMany';

// Duplicate export

// ObjectType of `typeorm`
// https://github.com/typeorm/typeorm/blob/master/src/common/ObjectType.ts

// ObjectType of `typedi` --> ObjectTypeDI
// https://github.com/typestack/typedi/blob/develop/src/types/ObjectType.ts
