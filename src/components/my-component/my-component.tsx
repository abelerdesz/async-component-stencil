import { Component, State, h } from '@stencil/core'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})

export class MyComponent {
  @State() userName: string
  userId: string = '0'

  private getUser(e: any): void {
    e.preventDefault()

    fetch(`https://jsonplaceholder.typicode.com/users/${e.target.userId.value}`)
      .then(response => response.json())
      .then(response => {
        this.userName = response.name
      })
      .catch(() => {
        this.userName = "Not found"
      })
  }

  render() {
    return (
      <div>
        <div>
          <strong>Current user: {this.userName || 'none'}</strong>
        </div>
        <hr />
        <form onSubmit={this.getUser.bind(this)}>
          <input name="userId" type="text" defaultValue={this.userId} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
