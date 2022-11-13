import { useRouter } from 'next/router'

const docu = () => {
  const router = useRouter()
  const {pid} = router.query
  return (
    <>
      <div> view page : {pid} </div>
    </>
  );
};

export default docu;
