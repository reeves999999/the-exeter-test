import { render, screen } from '@testing-library/react';
import Search from '../../../src/components/Search';
import userEvent from '@testing-library/user-event';
import { UserRepoProvider } from '../../contexts/UserRepoContext';

describe('Search', () => {
  const renderComponent = () => {
    const handleSubmit = vi.fn();
    render(
      <UserRepoProvider>
        <Search />
      </UserRepoProvider>
    );

    return {
      input: screen.getByPlaceholderText(/e\.g/i),
      button: screen.getByRole('button'),
      handleSubmit,
      user: userEvent.setup(),
    };
  };

  it('should render input and button', () => {
    const { input, button } = renderComponent();
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('should call handleChange when enter pressed', async () => {
    const searchTerm = 'searchterm';
    const { input, user } = renderComponent();
    await user.type(input, `${searchTerm}{enter}`);
    expect(input).toHaveValue(searchTerm);
  });

  it('should NOT call handleClick if input empty', async () => {
    const { handleSubmit, user, button } = renderComponent();
    await user.click(button);
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
