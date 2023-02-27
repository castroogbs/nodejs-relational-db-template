interface IMapperContract<E, D> {
  toDTO(entity: E): D;
  toEntity(dto: D): E;
}

export { IMapperContract };
