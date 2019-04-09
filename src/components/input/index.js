import React, { Component } from 'react'
import InputWrapper from './style'


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
            value: '',
            showClear: false //显示清除icon           
        }
        this.inputRef = React.createRef();
        this.changeHandler = this.changeHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this)
        this.focusHandler = this.focusHandler.bind(this)
        this.blurHandler = this.blurHandler.bind(this)
    }
    // React组件默认注入属性
	static defaultProps = {
		type: 'text',
        disabled: false
	}
	changeHandler(ev) {
        let value = ev.target.value
        const { change } = this.props

		this.setState({
			value: value
        })
        change(value)
    }
    resetHandler(ev) {
        let value = ''
        const { change } = this.props


		this.setState({
			value: value
        })
        change(value)
        this.inputRef.current.focus()
    }
    focusHandler(ev) {
        this.setState({
            showClear: true
        })
    }
    blurHandler(ev) {
        // this.setState({
        //     showClear: false
        // })
    }
    renderIcon(props) {
        const { prefix, suffix } = props;
        const { showClear } = this.state;

        const prefixIcon = prefix ? (<span className={prefix} />) : null;
        const suffixIcon = suffix && showClear? 
                            (<span className={suffix} onClick={this.resetHandler}/>) : null;
    
        return {
            prefixIcon,
            suffixIcon
        }
    }
	render() {
        const { value } = this.state
        const { placeholder, type} = this.props
        const { prefixIcon, suffixIcon } = this.renderIcon(this.props)

		return (
            <InputWrapper>
                <div className="cell field">
                    <div className="cell-left">
                        { prefixIcon }
                    </div>
                    <div className="cell-wrapper">
                        <div className="cell-title" style={{display: 'none'}}>
                            <span />
                        </div>
                        <div className="cell-value">
                            <input
                                placeholder={placeholder}
                                type={type}
                                ref={this.inputRef}
                                className="cell-core"
                                value={fixValue(value)}
                                onChange={this.changeHandler}
                                onFocus={this.focusHandler}
                                onBlur={this.blurHandler}
                            />
                            {suffixIcon}
                        </div>
                    </div>
                    <div className="cell-right">
                        <span className="field-state" />
                    </div>
                </div>
            </InputWrapper>
		)
	}
}

export default Input
