import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
    html,body {
        width: 100%;
        box-sizing: border-box;
    }
	body {
		line-height: 1;
        padding: 0px;
        margin: 0px auto;
        background-color: #fff;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

    a {
        text-decoration: none;
        color: #212529;
    }
    input {
        outline: none;
        border: none;
        outline-color: #108ee9;
    }

    input[type=radio],
    input[type=checkbox] {
        box-sizing: border-box;
        padding: 0;
    }
    button {
        user-select: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
    }

    button:active {
        opacity: 0.75;
    }

    button:disabled {
        color: #fff !important;
        background-color: #6c757d !important;
        border-color: #6c757d !important;
    }

    .btn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        padding: 10px 12px;
        font-size: 34px;
        border-radius: 8px;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }

    .btn-primary {
        color: #fff;
        /* background-color: #007bff;
            border-color: #007bff; */
        background-color: #108ee9;
        border-color: #108ee9;
    }

    .btn-secondary {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    .btn-success {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    .btn-danger {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    .btn-warning {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    #nprogress .bar {
        height: 3px;
        background-color: #04be02;
    }
`
