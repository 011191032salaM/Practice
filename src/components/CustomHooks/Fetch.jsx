import useFetch from "./useFetch"


const Fetch = () => {
    const link='https://api.github.com/users';
    const [isLoading,isError,user]=useFetch();

  return (
    <div>Fetch</div>
  )
}

export default Fetch