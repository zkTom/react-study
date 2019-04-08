import styled from 'styled-components'

const InputWrapper = styled.div`
	.cell {
		/* border-bottom: 1px solid #f0f0f0; */
		display: flex;
		background-color: #fff;
		box-sizing: border-box;
		color: inherit;
		min-height: 48px;
		overflow: hidden;
		position: relative;

		&-left {
			position: absolute;
			height: 100%;
            left: 20px;
            top: 15px;
			transform: translate3d(-100%, 0, 0);
		}

		&-right {
			position: absolute;
			height: 100%;
            right: 20px;
            top: 15px;
			transform: translate3d(100%, 0, 0);
		}

		&-wrapper {
			/* background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%); */
			background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
			background-size: 120% 1px;
			background-repeat: no-repeat;
			background-position: bottom left;
			background-origin: content-box;
			align-items: center;
			box-sizing: border-box;
			display: flex;
			font-size: 16px;
			line-height: 1;
			min-height: inherit;
			overflow: hidden;
			padding: 0 25px;
			width: 100%;
		}
		&-title {
			width: 100px;
			flex: none;
		}
		&-value {
			flex: 1;
			display: flex;
			align-items: center;
			color: #888;

			.cell-core {
				appearance: none;
				border-radius: 0;
				border: 0;
				outline: 0;
				flex: 1;
				line-height: 1.6;
				width: 100%;
				font-size: inherit;
			}
		}
	}
`
export default InputWrapper
