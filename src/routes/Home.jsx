import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="App">
            <header className="App-header">
                {/* Thay đổi ở dòng dưới: thêm "flex", thay đổi "max-w-xl" -> "max-w-2xl" */}
                <div class="max-w-4xl flex bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    {/* Thay đổi ở dòng dưới: thêm class để giới hạn chiều rộng cột ảnh */}
                    <a href="#" className="">
                        {/* Thay đổi ở dòng dưới: "rounded-t-lg" -> "rounded-l-lg", thêm "h-full object-cover" */}
                        <img class="rounded-l-lg h-full object-cover" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Thông Tin</h5>
                            <h4 class="mb-2 font-bold  text-gray-900 text-white">__________________________</h4>
                        </a>
                        <div className="w-full max-w-5xl px-4 md:px-8 text-left mb-8 text-white">

                            <div className="text-base md:text-lg space-y-1">
                                <p>
                                    Họ và tên: Lục Tấn Anh
                                </p>
                                <p>
                                    Chuyên ngành: Công nghệ thông tin
                                </p>
                                <p>
                                    SĐT: 0353765363
                                </p>
                                <p>
                                    Email: luctananhcv@gmail.com
                                </p>
                                <p>
                                    GitHub:
                                    <a href="https://github.com/luctananh" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-400 hover:underline">
                                        https://github.com/luctananh
                                    </a>
                                </p>
                                <p>
                                    Địa chỉ: TT.Nhã Nam, Huyện Tân Yên, Tỉnh Bắc Ninh
                                </p>
                            </div>
                        </div>
                        <div className='gr-button-home' >
                            <a href="https://www.topcv.vn/xem-cv/VlZUAlpQClcAAVIEDQRRBQYGUwZeX1dXU14NAg89c4" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                My CV
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <Link to="/project" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Project
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </header >
        </div >
    );
}

export default Home;
