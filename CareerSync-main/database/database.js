const country = [{
    country_id: 'COU001',
    country_name: 'Indonesia'
}, {
    country_id: 'COU002',
    country_name: 'Malaysia'
}, {
    country_id: 'COU003',
    country_name: 'Singapore'
}, {
    country_id: 'COU004',
    country_name: 'Thailand'
}, {
    country_id: 'COU005',
    country_name: 'Philippines'
}, {
    country_id: 'COU006',
    country_name: 'Vietnam'
}];

const province = [{
    province_id: 'PRO001',
    province_name: 'East Java',
    country_id: 'COU001'
}, {
    province_id: 'PRO002',
    province_name: 'West Java',
    country_id: 'COU001'
}, {
    province_id: 'PRO003',
    province_name: 'Kuala Lumpur',
    country_id: 'COU002'
}, {
    province_id: 'PRO004',
    province_name: 'Selangor',
    country_id: 'COU002'
}, {
    province_id: 'PRO005',
    province_name: 'Central Singapore',
    country_id: 'COU003'
}, {
    province_id: 'PRO006',
    province_name: 'Southern Thailand',
    country_id: 'COU004'
}];

const district = [{
    district_id: 'DIS001',
    district_name: 'Surabaya',
    province_id: 'PRO001'
}, {
    district_id: 'DIS002',
    district_name: 'Bandung',
    province_id: 'PRO002'
}, {
    district_id: 'DIS003',
    district_name: 'Kuala Lumpur',
    province_id: 'PRO003'
}, {
    district_id: 'DIS004',
    district_name: 'Petaling Jaya',
    province_id: 'PRO004'
}, {
    district_id: 'DIS005',
    district_name: 'Singapore',
    province_id: 'PRO005'
}, {
    district_id: 'DIS006',
    district_name: 'Hat Yai',
    province_id: 'PRO006'
}];

// =======================================================================================================

const user = [{
    user_id: 'USE001',
    user_name: 'Adya Muhammad Prawira',
    user_dob: 'May 11, 2002',
    user_email: 'adya_123@gmail.com',
    user_password: 'adya_123',
    user_picture: './assets/adya_muhammad_prawira.jpg',
    user_description: 'An enthusiastic software engineer.',
    user_address: 'Jl. Sudirman No.1, Surabaya',
    district_id: 'DIS001',
    education_id: ['EDU001', 'EDU002'],
    skill_id: ['SKI001', 'SKI004']
}, {
    user_id: 'USE002',
    user_name: 'Dini Annisa Sekarayu',
    user_dob: 'August 22, 2001',
    user_email: 'diniannisa_321@gmail.com',
    user_password: 'diniannisa_321',
    user_picture: './assets/dini_annisa_sekarayu.jpg',
    user_description: 'A passionate business marketer.',
    user_address: 'Jl. Merdeka No.2, Bandung',
    district_id: 'DIS002',
    education_id: ['EDU003'],
    skill_id: ['SKI003', 'SKI005']
}, {
    user_id: 'USE003',
    user_name: 'Chen Wei Ling',
    user_dob: 'June 15, 1998',
    user_email: 'chenwei_ling@gmail.com',
    user_password: 'chenwei_123',
    user_picture: './assets/chen_wei_ling.jpg',
    user_description: 'Experienced in financial analysis.',
    user_address: '123 Orchard Road, Singapore',
    district_id: 'DIS005',
    education_id: ['EDU001'],
    skill_id: ['SKI001', 'SKI002']
}, {
    user_id: 'USE004',
    user_name: 'John Doe',
    user_dob: 'January 5, 1990',
    user_email: 'john_doe@gmail.com',
    user_password: 'john_doe_123',
    user_picture: './assets/john_doe.jpg',
    user_description: 'A seasoned project manager.',
    user_address: '45 Green Street, Petaling Jaya',
    district_id: 'DIS004',
    education_id: ['EDU002'],
    skill_id: ['SKI007', 'SKI006']
}, {
    user_id: 'USE005',
    user_name: 'Maria Clara',
    user_dob: 'February 14, 1985',
    user_email: 'maria_clara@gmail.com',
    user_password: 'maria_clara_123',
    user_picture: './assets/maria_clara.jpg',
    user_description: 'Expert in logistics and supply chain management.',
    user_address: '76 Blue Road, Manila',
    district_id: 'DIS006',
    education_id: ['EDU003'],
    skill_id: ['SKI005', 'SKI002']
}, {
    user_id: 'USE006',
    user_name: 'David Tan',
    user_dob: 'July 22, 1995',
    user_email: 'david_tan@gmail.com',
    user_password: 'david_tan_123',
    user_picture: './assets/david_tan.jpg',
    user_description: 'Creative web designer.',
    user_address: '32 Sunset Blvd, Kuala Lumpur',
    district_id: 'DIS003',
    education_id: ['EDU001'],
    skill_id: ['SKI005', 'SKI003']
}, {
    user_id: 'USE007',
    user_name: 'Linda Lee',
    user_dob: 'March 3, 1992',
    user_email: 'linda_lee@gmail.com',
    user_password: 'linda_lee_123',
    user_picture: './assets/linda_lee.jpg',
    user_description: 'Data analyst with a keen eye for detail.',
    user_address: '22 Spring Avenue, Singapore',
    district_id: 'DIS005',
    education_id: ['EDU002'],
    skill_id: ['SKI006', 'SKI004']
}, {
    user_id: 'USE008',
    user_name: 'Aung San Suu Kyi',
    user_dob: 'October 15, 1980',
    user_email: 'aung_san@gmail.com',
    user_password: 'aung_san_123',
    user_picture: './assets/aung_san.jpg',
    user_description: 'Seasoned software engineer.',
    user_address: '78 Golden Street, Yangon',
    district_id: 'DIS001',
    education_id: ['EDU003'],
    skill_id: ['SKI004', 'SKI007']
}];

const company = [{
    company_id: 'COM001',
    company_name: 'Tokopedia',
    company_email: 'tokopedia_777@tokped.ac.id',
    company_password: 'tokopedia_777',
    company_picture: './assets/tokopedia.jpg',
    date_founded: 'February 6, 2009',
    company_description: 'Leading e-commerce platform in Indonesia.',
    company_address: 'Jl. MH Thamrin No. 9, Jakarta',
    district_id: 'DIS001',
}, {
    company_id: 'COM002',
    company_name: 'Grab',
    company_email: 'grab_888@grab.com',
    company_password: 'grab_888',
    company_picture: './assets/grab.jpg',
    date_founded: 'June 16, 2012',
    company_description: 'Southeast Asia\'s leading superapp.',
    company_address: '3 Fraser Street, DUO Tower, Singapore',
    district_id: 'DIS005',
}, {
    company_id: 'COM003',
    company_name: 'Maybank',
    company_email: 'maybank_999@maybank.com',
    company_password: 'maybank_999',
    company_picture: './assets/maybank.jpg',
    date_founded: 'May 31, 1960',
    company_description: 'Major financial services group in Malaysia.',
    company_address: 'Menara Maybank, Kuala Lumpur',
    district_id: 'DIS003',
}, {
    company_id: 'COM004',
    company_name: 'AirAsia',
    company_email: 'airasia_777@airasia.com',
    company_password: 'airasia_777',
    company_picture: './assets/airasia.jpg',
    date_founded: 'November 12, 1993',
    company_description: 'Leading low-cost airline in Asia.',
    company_address: 'RedQ, Kuala Lumpur International Airport, Malaysia',
    district_id: 'DIS003',
}, {
    company_id: 'COM005',
    company_name: 'Shopee',
    company_email: 'shopee_555@shopee.com',
    company_password: 'shopee_555',
    company_picture: './assets/shopee.jpg',
    date_founded: 'February 14, 2015',
    company_description: 'Popular e-commerce platform in Southeast Asia.',
    company_address: '5 Science Park Drive, Singapore',
    district_id: 'DIS005',
}, {
    company_id: 'COM006',
    company_name: 'Gojek',
    company_email: 'gojek_999@gojek.com',
    company_password: 'gojek_999',
    company_picture: './assets/gojek.jpg',
    date_founded: 'October 13, 2010',
    company_description: 'Indonesian on-demand multi-service platform.',
    company_address: 'Jl. Kemang Timur No. 21, Jakarta',
    district_id: 'DIS001',
}, {
    company_id: 'COM007',
    company_name: 'Lazada',
    company_email: 'lazada_666@lazada.com',
    company_password: 'lazada_666',
    company_picture: './assets/lazada.jpg',
    date_founded: 'March 27, 2012',
    company_description: 'Leading e-commerce platform in Southeast Asia.',
    company_address: '19 Keppel Road, Singapore',
    district_id: 'DIS005',
}];

// =======================================================================================================

const review = [{
    user_id: 'USE001',
    company_id: 'COM001',
    review_description: 'Great company with excellent growth opportunities.',
    rating: 4.5
}, {
    user_id: 'USE002',
    company_id: 'COM002',
    review_description: 'Fantastic work environment and team.',
    rating: 4.8
}, {
    user_id: 'USE003',
    company_id: 'COM003',
    review_description: 'Solid company with strong financials.',
    rating: 4.2
}, {
    user_id: 'USE004',
    company_id: 'COM004',
    review_description: 'Efficient management and supportive culture.',
    rating: 4.7
}, {
    user_id: 'USE005',
    company_id: 'COM005',
    review_description: 'Innovative company with great benefits.',
    rating: 4.6
}, {
    user_id: 'USE006',
    company_id: 'COM006',
    review_description: 'Dynamic work environment with plenty of opportunities.',
    rating: 4.4
}, {
    user_id: 'USE007',
    company_id: 'COM007',
    review_description: 'Excellent platform for career growth.',
    rating: 4.3
}, {
    user_id: 'USE008',
    company_id: 'COM001',
    review_description: 'Friendly colleagues and a great place to work.',
    rating: 4.5
}];

// =======================================================================================================

const education = [{
    education_id: 'EDU001',
    education_degree: 'Bachelor',
    education_name: 'Bina Nusantara University'
}, {
    education_id: 'EDU002',
    education_degree: 'Master',
    education_name: 'National University of Singapore'
}, {
    education_id: 'EDU003',
    education_degree: 'PhD',
    education_name: 'University of Malaya'
}];

const skill = [{
    skill_id: 'SKI001',
    skill_name: 'Microsoft Excel'
}, {
    skill_id: 'SKI002',
    skill_name: 'Microsoft Word'
}, {
    skill_id: 'SKI003',
    skill_name: 'Microsoft Power Point'
}, {
    skill_id: 'SKI004',
    skill_name: 'Machine Learning'
}, {
    skill_id: 'SKI005',
    skill_name: 'Web Design'
}, {
    skill_id: 'SKI006',
    skill_name: 'Data Analysis'
}, {
    skill_id: 'SKI007',
    skill_name: 'Project Management'
}];

const industry = [{
    industry_id: 'IND001',
    industry_name: 'Accountant'
}, {
    industry_id: 'IND002',
    industry_name: 'Software Engineering'
}, {
    industry_id: 'IND003',
    industry_name: 'Business Marketing'
}, {
    industry_id: 'IND004',
    industry_name: 'Financial Services'
}, {
    industry_id: 'IND005',
    industry_name: 'Logistics'
}];

// =======================================================================================================
const job_list = [{
    job_list_id: 'JOB001',
    company_id: 'COM001',
    industry_id: 'IND001',
    skill_id: ['SKI001', 'SKI004'],
    education_id: ['EDU001'],
    job_description: 'Looking for a skilled accountant with experience in financial software and machine learning.',
    salary: 1200,
    start_date: 'June 11, 2024',
    end_date: 'July 02, 2024'
}, {
    job_list_id: 'JOB002',
    company_id: 'COM002',
    industry_id: 'IND002',
    skill_id: ['SKI003', 'SKI005'],
    education_id: ['EDU002'],
    job_description: 'Seeking a software engineer with expertise in Microsoft Power Point and web design.',
    salary: 1660,
    start_date: 'June 15, 2024',
    end_date: 'July 10, 2024'
}, {
    job_list_id: 'JOB003',
    company_id: 'COM003',
    industry_id: 'IND004',
    skill_id: ['SKI006', 'SKI007'],
    education_id: ['EDU003'],
    job_description: 'Financial services firm looking for an experienced data analyst and project manager.',
    salary: 2000,
    start_date: 'June 20, 2024',
    end_date: 'July 15, 2024'
}, {
    job_list_id: 'JOB004',
    company_id: 'COM004',
    industry_id: 'IND005',
    skill_id: ['SKI002', 'SKI005'],
    education_id: ['EDU002'],
    job_description: 'Leading low-cost airline needs a logistics expert with skills in Microsoft Word and web design.',
    salary: 1465,
    start_date: 'June 25, 2024',
    end_date: 'July 20, 2024'
}, {
    job_list_id: 'JOB005',
    company_id: 'COM005',
    industry_id: 'IND003',
    skill_id: ['SKI003', 'SKI005'],
    education_id: ['EDU001'],
    job_description: 'E-commerce platform hiring a business marketer with skills in Power Point and web design.',
    salary: 1330,
    start_date: 'June 30, 2024',
    end_date: 'July 25, 2024'
}, {
    job_list_id: 'JOB006',
    company_id: 'COM006',
    industry_id: 'IND002',
    skill_id: ['SKI004', 'SKI005'],
    education_id: ['EDU002'],
    job_description: 'On-demand platform looking for a software engineer with machine learning expertise.',
    salary: 1800,
    start_date: 'July 01, 2024',
    end_date: 'July 30, 2024'
}, {
    job_list_id: 'JOB007',
    company_id: 'COM007',
    industry_id: 'IND001',
    skill_id: ['SKI006', 'SKI003'],
    education_id: ['EDU001'],
    job_description: 'E-commerce platform seeking a financial analyst skilled in data analysis and Power Point.',
    salary: 1400,
    start_date: 'July 05, 2024',
    end_date: 'August 02, 2024'
}, {
    job_list_id: 'JOB008',
    company_id: 'COM001',
    industry_id: 'IND004',
    skill_id: ['SKI007', 'SKI002'],
    education_id: ['EDU003'],
    job_description: 'Accounting firm looking for a project manager with experience in Word and management.',
    salary: 1735,
    start_date: 'July 10, 2024',
    end_date: 'August 05, 2024'
}, {
    job_list_id: 'JOB009',
    company_id: 'COM002',
    industry_id: 'IND005',
    skill_id: ['SKI001', 'SKI005'],
    education_id: ['EDU002'],
    job_description: 'Superapp hiring a logistics expert skilled in Excel and web design.',
    salary: 1600,
    start_date: 'July 15, 2024',
    end_date: 'August 10, 2024'
}, {
    job_list_id: 'JOB010',
    company_id: 'COM003',
    industry_id: 'IND003',
    skill_id: ['SKI003', 'SKI007'],
    education_id: ['EDU001'],
    job_description: 'Marketing firm seeking a business marketer with skills in Power Point and project management.',
    salary: 1530,
    start_date: 'July 20, 2024',
    end_date: 'August 15, 2024'
}, {
    job_list_id: 'JOB011',
    company_id: 'COM004',
    industry_id: 'IND002',
    skill_id: ['SKI004', 'SKI003'],
    education_id: ['EDU002'],
    job_description: 'Airline seeking a software engineer skilled in machine learning and Power Point.',
    salary: 1735,
    start_date: 'July 25, 2024',
    end_date: 'August 20, 2024'
}, {
    job_list_id: 'JOB012',
    company_id: 'COM005',
    industry_id: 'IND004',
    skill_id: ['SKI006', 'SKI005'],
    education_id: ['EDU003'],
    job_description: 'E-commerce platform hiring a data analyst with skills in data analysis and web design.',
    salary: 1800,
    start_date: 'August 01, 2024',
    end_date: 'August 25, 2024'
}, {
    job_list_id: 'JOB013',
    company_id: 'COM006',
    industry_id: 'IND001',
    skill_id: ['SKI002', 'SKI007'],
    education_id: ['EDU001'],
    job_description: 'On-demand platform seeking an accountant with skills in Word and project management.',
    salary: 1465,
    start_date: 'August 05, 2024',
    end_date: 'August 30, 2024'
}, {
    job_list_id: 'JOB014',
    company_id: 'COM007',
    industry_id: 'IND005',
    skill_id: ['SKI001', 'SKI003'],
    education_id: ['EDU002'],
    job_description: 'E-commerce platform hiring a logistics expert with skills in Excel and Power Point.',
    salary: 1665,
    start_date: 'August 10, 2024',
    end_date: 'September 05, 2024'
}, {
    job_list_id: 'JOB015',
    company_id: 'COM001',
    industry_id: 'IND003',
    skill_id: ['SKI005', 'SKI007'],
    education_id: ['EDU001'],
    job_description: 'Accounting firm seeking a business marketer with skills in web design and project management.',
    salary: 1530,
    start_date: 'August 15, 2024',
    end_date: 'September 10, 2024'
}];

const application = [{
    application_id: 'APP001',
    user_id: 'USE001',
    company_id: 'COM001',
    job_list_id: 'JOB001',
    application_status: true,
    application_date: 'June 15, 2024'
}, {
    application_id: 'APP002',
    user_id: 'USE002',
    company_id: 'COM002',
    job_list_id: 'JOB002',
    application_status: false,
    application_date: 'June 18, 2024'
}, {
    application_id: 'APP003',
    user_id: 'USE003',
    company_id: 'COM003',
    job_list_id: 'JOB003',
    application_status: true,
    application_date: 'June 21, 2024'
}, {
    application_id: 'APP004',
    user_id: 'USE004',
    company_id: 'COM004',
    job_list_id: 'JOB004',
    application_status: false,
    application_date: 'June 26, 2024'
}, {
    application_id: 'APP005',
    user_id: 'USE005',
    company_id: 'COM005',
    job_list_id: 'JOB005',
    application_status: true,
    application_date: 'July 01, 2024'
}, {
    application_id: 'APP006',
    user_id: 'USE006',
    company_id: 'COM006',
    job_list_id: 'JOB006',
    application_status: true,
    application_date: 'July 05, 2024'
}, {
    application_id: 'APP007',
    user_id: 'USE007',
    company_id: 'COM007',
    job_list_id: 'JOB007',
    application_status: false,
    application_date: 'July 10, 2024'
}, {
    application_id: 'APP008',
    user_id: 'USE008',
    company_id: 'COM001',
    job_list_id: 'JOB008',
    application_status: true,
    application_date: 'July 15, 2024'
}, {
    application_id: 'APP009',
    user_id: 'USE001',
    company_id: 'COM002',
    job_list_id: 'JOB009',
    application_status: false,
    application_date: 'July 20, 2024'
}, {
    application_id: 'APP010',
    user_id: 'USE002',
    company_id: 'COM003',
    job_list_id: 'JOB010',
    application_status: true,
    application_date: 'July 25, 2024'
}, {
    application_id: 'APP011',
    user_id: 'USE003',
    company_id: 'COM004',
    job_list_id: 'JOB011',
    application_status: false,
    application_date: 'July 30, 2024'
}, {
    application_id: 'APP012',
    user_id: 'USE004',
    company_id: 'COM005',
    job_list_id: 'JOB012',
    application_status: true,
    application_date: 'August 01, 2024'
}, {
    application_id: 'APP013',
    user_id: 'USE005',
    company_id: 'COM006',
    job_list_id: 'JOB013',
    application_status: false,
    application_date: 'August 05, 2024'
}, {
    application_id: 'APP014',
    user_id: 'USE006',
    company_id: 'COM007',
    job_list_id: 'JOB014',
    application_status: true,
    application_date: 'August 10, 2024'
}, {
    application_id: 'APP015',
    user_id: 'USE007',
    company_id: 'COM001',
    job_list_id: 'JOB015',
    application_status: false,
    application_date: 'August 15, 2024'
}];
