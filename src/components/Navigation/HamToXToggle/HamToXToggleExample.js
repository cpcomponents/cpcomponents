/* Example usage of component toggled with internal state */
<HamToXToggle
  color="var(--pri-color)"
  width="50px"
  height="30px"
  thickness="4px"
/>

/* Example usage of component toggled with external state passed via prop */
<HamToXToggle
  toggleActive={this.state.toggle}
  color="var(--pri-color)"
  width="50px"
  height="30px"
  thickness="4px"
/>
