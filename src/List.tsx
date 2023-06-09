import { useEffect, useState } from "react";

function List({ api }: { api: () => Promise<any> }) {
  const [data, setData] = useState<{
    id: number;
    url: string;
    width: number;
    height: number;
  }>();

  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const start = Date.now();
      const data = await api();
      setTime(Date.now() - start);
      setData(data.data[0]);
    };
    fetchData();
  }, [api]);

  return (
    <div>
      <p>
        <img width={100} src={data?.url} />
      </p>
      <p>id: {data?.id}</p>
      <p>url: {data?.url}</p>
      <p>API time: {time}</p>
    </div>
  );
}

export default List;
