import { ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type ContextProperties = {
  userRepo: string;
  setUserRepo: React.Dispatch<React.SetStateAction<string>>;
};

const UserRepoContext = createContext<ContextProperties>(
  {} as ContextProperties
);

const UserRepoProvider = ({ children }: Props) => {
  const [userRepo, setUserRepo] = useState('');

  return (
    <UserRepoContext.Provider value={{ userRepo, setUserRepo }}>
      {children}
    </UserRepoContext.Provider>
  );
};

export { UserRepoContext, UserRepoProvider };
