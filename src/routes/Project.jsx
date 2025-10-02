import logo from '../logo.svg';
import '../App.css';
import websiteImg from '../images/website.png';
import webappImg from '../images/webapp.png';

function Project() {
    return (
        <div className="App">
            <header className="App-header" >
                <div className="App-card">

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Hệ thống quản lý Review AliExpress.com
                            </h5>
                        </a>
                        <img
                            src={websiteImg}
                            alt="Preview Website"
                            className="w-full h-64 object-cover rounded-lg border"
                        />
                        <a
                            href="https://importreview.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Deploy
                        </a>
                        <div className="mt-4 text-left">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Mô tả:
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">

                                Website cung cập dịch vụ quản lý thu thập review từ nền táng AliExpress.com. Các chức năng Chính: crawl review, thêm, sửa, xóa, xuất file csv,... cho từng sản phẩm
                            </p>
                        </div>

                    </div>

                    {/* Thay thế toàn bộ khối div này */}
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            WebApp: AppFont với nền tảng Shopify
                        </h5>
                        <img
                            src={webappImg}
                            alt="Preview WebApp"
                            className="w-full h-64 object-cover rounded-lg border"
                        />
                        <div className='gr-button-home mt-3 flex items-center space-x-2'> {/* Thêm flex và space-x */}
                            <a
                                href="https://appfont.gadget.app/?shop=store-altt.myshopify.com&embedded=1&gadgetmockappbridge=1&clientid=81234c2fe5365811fb178688e536066e&clientsecret=4fe015c86361e77320dbc0b699ef6b0e&id_token=eyJhbGciOiJIUzI1NiJ9.eyJzaWQiOiJzN1V5OWZuZXMyT2hCWmZUeUxCVjciLCJkZXN0Ijoic3RvcmUtYWx0dC5teXNob3BpZnkuY29tIiwiaWF0IjoxNzU5MzY4OTYwLCJpc3MiOiJzdG9yZS1hbHR0Lm15c2hvcGlmeS5jb20vYWRtaW4iLCJhdWQiOiI4MTIzNGMyZmU1MzY1ODExZmIxNzg2ODhlNTM2MDY2ZSIsInN1YiI6IjEyMyIsImV4cCI6MTc1OTM2OTA4MH0.t4hLuBANL_MX0AstQ8ze10NjxcsaDMUL5ZnUYc1_VrE&hmac=92f02e14224944aab0e09d5d1ad745a59d82cc1c86741b7b556428960d5e336d"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Deploy
                            </a>
                            <a
                                href="https://store-altt.myshopify.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800" // Đổi màu nút cho dễ phân biệt
                            >
                                Preview
                            </a>
                        </div>

                        {/* === PHẦN THÔNG TIN MẬT KHẨU MỚI === */}
                        <div className="mt-4 text-left">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Enter store password:
                            </p>
                            <p className="mt-2 px-3 py-1 text-base font-mono text-white bg-gray-900 dark:bg-gray-600 rounded-md">
                                123456
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                ( Lưu ý: hãy tải lại trang Perview sau khi save thành công bên Deploy )
                            </p>
                        </div>
                        {/* ===================================== */}
                    </div>
                </div>
            </header >
        </div >
    );
}

export default Project;
