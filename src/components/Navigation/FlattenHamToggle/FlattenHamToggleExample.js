/* Example usage of component toggled with internal state */
<FlattenHamToggle
  color="var(--black)"
  width="50px"
  height="30px"
  thickness="4px"
/>

/* Example usage of component toggled with external state passed via prop */
<FlattenHamToggle
  toggleActive={this.state.toggle}
  color="var(--black)"
  width="50px"
  height="30px"
  thickness="4px"
/>
