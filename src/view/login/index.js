import React, { Component } from 'react'
import Input from '../../components/input'
import { LoginWrapper, LoginLogo, LoginForm, LoginBottom } from './style'
import logoImg from '../../statics/images/logo.png'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			IDCard: '',
			password: ''
        }
        this.changeIDCard = this.changeIDCard.bind(this)
        this.changePassword = this.changePassword.bind(this)
	}
    changeIDCard(IDCard) {
        console.log(IDCard)
        this.setState({
            IDCard: IDCard
        })
    }
    changePassword(password) {
        console.log(password)
        this.setState({
            password: password
        })
    }
	render() {
		return (
			<div id="login" className="">
				<LoginWrapper>
					<LoginLogo>
						<img src={logoImg} alt="logo.png" />
					</LoginLogo>
					<LoginForm>
						<Input
							placeholder="输入身份证号"
							prefix="iconfont-ali icon-alishenfenrenzheng1"
                            suffix="iconfont-ali icon-alicuo"
                            change={this.changeIDCard}
						/>
						<Input
							placeholder="输入密码"
							prefix="iconfont-ali icon-alishenfenrenzheng1"
                            suffix="iconfont-ali icon-alicuo"
                            change={this.changePassword}
						/>
					</LoginForm>
					<LoginBottom />
				</LoginWrapper>
			</div>
		)
	}
}

export default Login
