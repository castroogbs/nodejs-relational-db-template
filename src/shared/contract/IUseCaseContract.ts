interface IUseCaseContract<A, B> {
  execute(data: A): Promise<B>;
}

export { IUseCaseContract };
