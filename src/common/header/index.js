import React from "react"
import {connect} from 'react-redux'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button} from "./style";

const Header = (props) =>{
   return (<HeaderWrapper>
        <Logo href='/'/>
        <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载APP</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>Aa</NavItem>
            <NavSearch className={props.focused ? 'focused': ''}
                       onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}
            ></NavSearch>

        </Nav>
        <Addition>
            <Button className='writing'>写文章</Button>
            <Button className='reg'>注册</Button>
        </Addition>
    </HeaderWrapper>);
}

const mapStateToProps = (state)=>{
    return {
        focused : state.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(){
            const action={
                type:'search_focus'
            }
            dispatch(action);
        },
        handleInputBlur(){
            const action={
                type:'search_blur'
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)