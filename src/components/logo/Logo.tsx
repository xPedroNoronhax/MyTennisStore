import logo from '../../assets/logo.png'
const Logo = () => {
  return (
    <div className="w-full rounded-[90px] py-[18px] bg-slate-100 font-bold   flex">
    <img className='ml-5 h-[50px] lg:h-[70px]' src={logo} alt="Logo" />
  </div>


  )
}

export default Logo