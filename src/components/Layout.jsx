import '@reshuffle/code-transform/macro';
import React from 'react';
import { useAuth } from '@reshuffle/react-auth';
import TodoList from './TodoList';

export default function Main() {
  const {
    loading,
    error,
    authenticated,
    profile,
    getLoginURL,
    getLogoutURL,
  } = useAuth();

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className='error'>
        <h1>{error.toString()}</h1>
      </div>
    );
  }
  return (
    <>
      <nav className='navbar navbar-expand-lg flex navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          Todo Demo
        </a>
        <div id='navbarText'>
          <ul className='navbar-nav mr-auto ' />
          {authenticated ? (
            <div className='dropdown'>
              <button
                className='btn btn-primary dropdown-toggle '
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                {profile.displayName}
              </button>
              <div
                className='dropdown-menu dropdown-menu-right'
                aria-labelledby='dropdownMenuButton'
              >
                <a className='dropdown-item' href={getLogoutURL()}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <span className='navbar-text'>
              <a
                className='btn btn-inline-primary'
                role='button'
                href={getLoginURL()}
              >
                Login
              </a>
            </span>
          )}
        </div>
      </nav>
      {authenticated ? (
        <TodoList />
      ) : (
        <div className='jumbotron' style={{ textAlign: 'center' }}>
          <h1 className='display-4'>Please login to edit your todo list</h1>
        </div>
      )}
    </>
  );
}
