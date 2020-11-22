## To have a child component invoke a parent component's method with arguments

<button onClick={ () => this.props.computeMethod(this.props.by)}>{this.props.by}</button>

## Useful ternary operator usage

    {
        this.props.by < 0 ?
            <button onClick={ () => this.props.computeMethod(this.props.by)}>{this.props.by}</button>
        :
            <button onClick={ () => this.props.computeMethod(this.props.by)}>+{this.props.by}</button>
    }

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

