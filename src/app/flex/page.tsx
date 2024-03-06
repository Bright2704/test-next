
export default function Flex() {

    const GetRandomColor = () => {
        //บรรทัดนี้คือ การสร้างสีสุ่ม โดยการสร้างตัวเลขสุ่ม 24 บิต แล้วแปลงเป็นฐาน 16
        const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        return randomColor
    }

  return (
   
    <div className="flex flex-auto">
        <div className="sm:w-32 h-[20rem] md:w-64 lg:w-64 order-first" style={{ backgroundColor: GetRandomColor() }}>01</div>
        <div className="sm:w-32 h-[30rem] md:w-64 lg:w-140 order-2" style={{ backgroundColor: GetRandomColor() }}>02</div>
        <div className="sm:w-32 h-[40rem] md:w-64 lg:w-64 order-3" style={{ backgroundColor: GetRandomColor() }}>03</div>
    </div>
  
  )
}
