import React, { useState, useCallback } from 'react'
import { TextInput } from 'components/UIkit/TextInput'

export const SignUp: React.FC = () => {
  const [username, setUserName] = useState<any>(""),
        [email, setEmail] = useState<any>(""),
        [password, setPassword] = useState<any>(""),
        [confirmPassword, setConfirmPassword] = useState<any>("");

  const inputUsername = useCallback(
    (event: any) => {
      setUserName(event.target.value)
    },[setUserName],
  )
  const inputEmail = useCallback(
    (event: any) => {
      setEmail(event.target.value)
    },[setEmail],
  )
  const inputPassword = useCallback(
    (event: any) => {
      setPassword(event.target.value)
    },[setPassword],
  )
  const inputConfirmPassword = useCallback(
    (event: any) => {
      setConfirmPassword(event.target.value)
    },[setConfirmPassword],
  )

  return (
    <div>
      <h2>アカウント登録</h2>
      <label htmlFor="username">ユーザー名</label>
      <input id="username" type="text" onChange={inputUsername}/>
      <label htmlFor="email">メールアドレス</label>
      <input id="email" type="text" onChange={inputUsername}/>
      <label htmlFor="password">パスワード</label>
      <input id="password" type="text" onChange={inputUsername}/>
      <label htmlFor="confirm-password">パスワード（確認用）</label>
      <input id="confirm-password" type="text" onChange={inputUsername}/>
    </div>
  )
}