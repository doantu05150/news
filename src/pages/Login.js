import React, { useState } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { FiArrowLeft } from 'react-icons/fi'

const LoginBg = styled.div`
  background: url('https://cdn.smobgame.com/templates/thosanlinhhon/images/bg1.jpg');
`
const LgContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`
const FormBox = styled.div`
  width: 300px;
  min-height: 320px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.79);
  border-radius: 6px;
  padding: 15px;
  text-align: center;
`
const FormHeader = styled.div`
  position: relative;

  .icon-back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`

const Title = styled.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  color: #fff;
  padding: 15px 0 15px 0;
`

const ButtonCt = styled.button`
  height: 36px;
  border-radius: 4px;
  border: 0;
  background: transparent;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 15px;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
const InputBox = styled.input`
  height: 36px;
  border-radius: 4px;
  border: 0;
  padding: 0 15px;
  margin-bottom: 15px;
  &:focus {
    outline-width: 0;
  }
`

const ForgetPwd = styled.a`
  text-decoration: underline !important;
  color: #fff !important;
  margin-bottom: 10px;
  font-size: 14px;
`

const ButtonForm = (color, label, e) => (
  <ButtonCt onClick={e} style={{ background: color }}>
    {label}
  </ButtonCt>
)
function Login() {
  const [form, setForm] = useState('')
  const handleLogin = () => {
    setForm('login')
  }

  const backForm = () => {
    if (form === 'login') {
      setForm('')
    } else if (form === 'signup') {
      setForm('login')
    }
  }

  return (
    <div>
      <LoginBg>
        <LgContainer>
          <FormBox>
            <FormHeader>
              {form !== '' && (
                <FiArrowLeft onClick={backForm} color="#fff" size="1.2rem" className="icon-back" />
              )}
              <Title>Đăng nhập</Title>
            </FormHeader>
            {form === '' && (
              <FormContainer>
                {ButtonForm('#f74f32', 'Tài khoản FUNID', handleLogin)}
                {ButtonForm('#3b5998', 'facebook')}
                {ButtonForm('#ADACAC', 'Chơi ngay')}
              </FormContainer>
            )}
            {form === 'login' && (
              <FormContainer>
                <InputBox placeholder="Tài khoản Funid" />
                <InputBox placeholder="Mật khẩu" type="password" />
                <ForgetPwd href="#">Quên mật khẩu?</ForgetPwd>
                {ButtonForm('#f74f32', 'Đăng nhập')}
                <div style={{ color: '#fff', fontSize: '14px' }}>
                  Bạn chưa có tài khoản?{' '}
                  <ForgetPwd onClick={() => setForm('signup')}>Đăng ký</ForgetPwd>
                </div>
              </FormContainer>
            )}
            {form === 'signup' && (
              <FormContainer>
                <InputBox placeholder="Tài khoản Funid" />
                <InputBox placeholder="Tài khoản Funid" />
                <InputBox placeholder="Tài khoản Funid" />
                <InputBox placeholder="Mật khẩu" type="password" />
                {ButtonForm('#f74f32', 'Đăng nhập')}
              </FormContainer>
            )}
          </FormBox>
        </LgContainer>
      </LoginBg>
    </div>
  )
}

export default withRouter(Login)
