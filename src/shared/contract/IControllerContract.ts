interface IControllerContract<A, B> {
  handle(request: A, response: B): Promise<B>;
}

export { IControllerContract };
