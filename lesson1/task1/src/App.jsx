import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';
class App extends Component {
  state = {
    theme: themes.dark,
  };
  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark ? themes.light : themes.light;
    this.setState({
      theme: newTheme,
    });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
