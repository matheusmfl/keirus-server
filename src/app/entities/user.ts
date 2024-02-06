import { Replace } from "src/helpers/replace"
import { UserPassword } from "./user-password"

export interface IUserProps {
  email: string
  password: UserPassword
  name: string
  created_at: Date
  last_access?: Date | null | undefined
  role: 'USER' | 'ADMIN' | 'SUPERADMIN'
}

export class User{
  private props: IUserProps
  constructor(props: Replace<IUserProps, {created_at?: Date }> ){
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date()
    }
  }

  public set email(email: string){
    this.props.email = email
  }

  public get email(): string{
    return this.props.email
  }

  public set password(password: UserPassword){
    this.props.password = password
  }

  public get password(): UserPassword{
    return this.props.password
  }

  public set name(name: string){
    this.props.name = name
  }

  public get name(): string{
    return this.props.name
  }

  public set created_at(created_at: Date){
    this.props.created_at = created_at
  }

  public get created_at(): Date{
    return this.props.created_at
  }

  public set last_access(last_access: Date | null | undefined){
    this.props.last_access = last_access
  }

  public get last_access(): Date | null | undefined{
    return this.props.last_access
  }

  public set role(role: 'USER' | 'ADMIN' | 'SUPERADMIN'){
    this.props.role = role
  }

  public get role(): string{
    return this.props.role
  }
}