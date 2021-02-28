interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<IResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fnkjnca983uy9yw9yryfnvxkvn9028684763fdknvkx',
        user: {
          name: 'fabio',
          email: 'fad@gmail.com',
        },
      });
    }, 2000);
  });
}
