

export default function Home() {
  return (
<div>


<div className="flex flex-col md:flex-row">


<div className="flex-1 p-4 md:pr-8 border-0 lg:mx-5 lg:px-5 lg:my-5 lg:px-5 lg:py-5 mx-4 my-4" style={{ borderColor:'red'}}>
 <p style={{color:'#1263C0'}}>About us</p>
 <h1 className="text-3xl my-3 font-bold"><section style={{color:'#1263C0'}}>We are Anglara</section> Digital
 Solutions</h1>
 <p>
   We are a team of creative individuals serving in different business niches for 8+ years now. With years of experience serving various businesses, we understand consumers’ expectations and design digital solutions catering to their needs. Convey us your digital goals, and our expert developers, designers, and marketers will leave no stones unturned in achieving them.
 </p>
</div>


<div className="border-0 lg:mx-5 lg:my-5 lg:px-5 lg:py-5 grid grid-cols-2 gap-4 mx-4 my-4">
<div className="border border-gray-300 p-4 flex flex-col items-center" 
    style={{ background: 'linear-gradient(279.96deg, #FFFFFF 14.74%, #E7F2FF 99.01%)' }}>
 <div className="text-3xl font-bold" style={{ color: '#1263C0' }}>6</div>
 <div className="text-sm">Years of Experience</div>
</div>

<div className="border border-gray-300 p-4 flex flex-col items-center" 
    style={{ background: 'linear-gradient(279.96deg, #FFFFFF 14.74%, #E7F2FF 99.01%)' }}>
 <div className="text-3xl font-bold" style={{ color: '#1263C0' }}>12</div>
 <div className="text-sm">Projects Completed</div>
</div>

<div className="border border-gray-300 p-4 flex flex-col items-center" 
    style={{ background: 'linear-gradient(279.96deg, #FFFFFF 14.74%, #E7F2FF 99.01%)' }}>
 <div className="text-3xl font-bold" style={{ color: '#1263C0' }}>24</div>
 <div className="text-sm">Happy Clients</div>
</div>

<div className="border border-gray-300 p-4 flex flex-col items-center" 
    style={{ background: 'linear-gradient(279.96deg, #FFFFFF 14.74%, #E7F2FF 99.01%)' }}>
 <div className="text-3xl font-bold" style={{ color: '#1263C0' }}>5</div>
 <div className="text-sm">Awards Won</div>
</div>
</div>




</div>


<div class="image-container mb-5">
<img src="/1.png" alt="Image 1" />
<img src="/2.png" alt="Image 2" />
<img src="/3.png" alt="Image 3" />
</div>

</div>
  );
}
