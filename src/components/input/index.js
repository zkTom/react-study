import React, { Component } from 'react'
import InputWrapper from './style'

function renderIcon(props) {
    const { prefix, suffix } = props;
    const prefixIcon = prefix ? (<span className={prefix} />) : null;
    const suffixIcon = suffix ? (<span className={suffix} />) : null;

    return {
        prefixIcon,
        suffixIcon
    }
}
function fixValue(value) {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }
class Input extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
        }
		this.changeCardHandler = this.changeCardHandler.bind(this)
	}
	static defaultProps = {
		type: 'text',
		disabled: false
	}
	changeCardHandler(ev) {
        let value = ev.target.value
        const { change } = this.props

		this.setState({
			value: value
        })
        change(value)
    }


	render() {
        const { value } = this.state
        const { placeholder} = this.props
        const { prefixIcon, suffixIcon } = renderIcon(this.props)

		return (
            <InputWrapper>
                <div className="cell field">
                    <div className="cell-left">
                        {prefixIcon}
                    </div>
                    <div className="cell-wrapper">
                        <div className="cell-title" style={{display: 'none'}}>
                            <span />
                        </div>
                        <div className="cell-value">
                            <input
                                placeholder={placeholder}
                                type="text"
                                className="cell-core"
                                value={fixValue(value)}
                                onChange={this.changeCardHandler}
                            />
                        </div>
                    </div>
                    <div className="cell-right">
                        {suffixIcon}
                        {/* <span className="cell-clear" /> */}
                        <span className="field-state" />
                    </div>
                </div>
            </InputWrapper>
		)
	}
}

export default Input
