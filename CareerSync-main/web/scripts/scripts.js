// ==========================================================================================================================
// navigation
const navigation_right_mode = document.querySelector('.navigation_right_mode');

// ==========================================================================================================================
// content job search
const content_job_search_country_combobox_text = document.querySelector('.content_job_search_country_combobox_text');
const content_job_search_province_combobox_text = document.querySelector('.content_job_search_province_combobox_text');
const content_job_search_district_combobox_text = document.querySelector('.content_job_search_district_combobox_text');
const content_job_search_industry_combobox_text = document.querySelector('.content_job_search_industry_combobox_text');
const content_job_search_skill_combobox_text = document.querySelector('.content_job_search_skill_combobox_text');

const content_job_search_country_combobox_select = document.querySelector('.content_job_search_country_combobox_select');
const content_job_search_province_combobox_select = document.querySelector('.content_job_search_province_combobox_select');
const content_job_search_district_combobox_select = document.querySelector('.content_job_search_district_combobox_select');
const content_job_search_industry_combobox_select = document.querySelector('.content_job_search_industry_combobox_select');
const content_job_search_skill_combobox_select = document.querySelector('.content_job_search_skill_combobox_select');

const content_job_search_search_button = document.querySelector('.content_job_search_search_button');

// ==========================================================================================================================
// content job list

const content_job_list_frame = document.querySelector('.content_job_list_frame');
const content_job_list_no_data_title = document.querySelector('.content_job_list_no_data_title');







// ==========================================================================================================================
// color mode

const light_color_mode_root = {
    '--color-gray-1': 'rgb(245, 245, 245)',
    '--color-gray-2': 'rgb(195, 195, 195)',
    '--color-gray-3': 'rgb(205, 205, 205)',
    '--color-gray-4': 'rgb(215, 215, 215)',
    '--color-gray-5': 'rgb(225, 225, 225)',
    '--color-main': 'rgb(0, 0, 0)'
};

const dark_color_mode_root = {
    '--color-gray-1': 'rgb(10, 10, 10)',
    '--color-gray-2': 'rgb(40, 40, 40)',
    '--color-gray-3': 'rgb(50, 50, 50)',
    '--color-gray-4': 'rgb(60, 60, 60)',
    '--color-gray-5': 'rgb(70, 70, 70)',
    '--color-main': 'rgb(225, 225, 225)'
};

change_color_mode('System');
navigation_right_mode.addEventListener('change', () => {
    change_color_mode(navigation_right_mode.value);
});

function change_color_mode(color_mode) {
    switch(color_mode) {
        case 'System':
            let dark_mode = window.matchMedia('(prefers-color-scheme: dark)');
            if (dark_mode.matches) {
                for(let color in dark_color_mode_root) {
                    document.documentElement.style.setProperty(color, dark_color_mode_root[color]);
                    localStorage.setItem(color, dark_color_mode_root[color]);
                }
            } else {
                for(let color in light_color_mode_root) {
                    document.documentElement.style.setProperty(color, light_color_mode_root[color]);
                    localStorage.setItem(color, light_color_mode_root[color]);
                }
            }
            break;
        case 'Light':
            for(let color in light_color_mode_root) {
                document.documentElement.style.setProperty(color, light_color_mode_root[color]);
                localStorage.setItem(color, light_color_mode_root[color]);
            }
            break;
        case 'Dark':
            for(let color in dark_color_mode_root) {
                document.documentElement.style.setProperty(color, dark_color_mode_root[color]);
                localStorage.setItem(color, dark_color_mode_root[color]);
            }
            break;
    }
}

// ==========================================================================================================================
// content job search

document.addEventListener('click', (event) => {
    if (!event.target.closest('.content_job_search_country_combobox_text')) {
        content_job_search_country_combobox_select.style.display = 'none';
    }
    if (!event.target.closest('.content_job_search_province_combobox_text')) {
        content_job_search_province_combobox_select.style.display = 'none';
    }
    if (!event.target.closest('.content_job_search_district_combobox_text')) {
        content_job_search_district_combobox_select.style.display = 'none';
    }
    if (!event.target.closest('.content_job_search_industry_combobox_text')) {
        content_job_search_industry_combobox_select.style.display = 'none';
    }
    if (!event.target.closest('.content_job_search_skill_combobox_text')) {
        content_job_search_skill_combobox_select.style.display = 'none';
    }
});

content_job_search_country_combobox_text.addEventListener('focus', () => {
    content_job_search_country_combobox_select.style.display = 'block';
    content_job_search_country_combobox_select.style.zIndex = '5';
});

country.forEach((element) => {
    content_job_search_country_combobox_select.innerHTML += `
    <option value="${element.country_name}">${element.country_name}</option>
    `;
});

content_job_search_province_combobox_text.addEventListener('focus', () => {
    content_job_search_province_combobox_select.style.display = 'block';
    content_job_search_province_combobox_select.style.zIndex = '4';
});

province.forEach((element) => {
    content_job_search_province_combobox_select.innerHTML += `
    <option value="${element.province_name}">${element.province_name}</option>
    `;
});

content_job_search_district_combobox_text.addEventListener('focus', () => {
    content_job_search_district_combobox_select.style.display = 'block';
    content_job_search_district_combobox_select.style.zIndex = '3';
});

district.forEach((element) => {
    content_job_search_district_combobox_select.innerHTML += `
    <option value="${element.district_name}">${element.district_name}</option>
    `;
});

content_job_search_industry_combobox_text.addEventListener('focus', () => {
    content_job_search_industry_combobox_select.style.display = 'block';
    content_job_search_industry_combobox_select.style.zIndex = '2';
});

industry.forEach((element) => {
    content_job_search_industry_combobox_select.innerHTML += `
    <option value="${element.industry_name}">${element.industry_name}</option>
    `;
});

content_job_search_skill_combobox_text.addEventListener('focus', () => {
    content_job_search_skill_combobox_select.style.display = 'block';
    content_job_search_skill_combobox_select.style.zIndex = '1';
});

skill.forEach((element) => {
    content_job_search_skill_combobox_select.innerHTML += `
    <option value="${element.skill_name}">${element.skill_name}</option>
    `;
});



// ==========================================================================================================================
// content job list

get_job_list()
function get_job_list() {
    if(job_list.length > 0) {
        content_job_list_frame.innerHTML = ``;
        job_list.forEach((element, index) => {
            get_company = search_company(element.company_id);
            [get_district, get_province, get_country] = search_district_province_country(get_company.district_id);
            if(index !== job_list.length - 1) {
                content_job_list_frame.innerHTML += `
                <div class="content_job_list_button" style="margin-bottom: 20px;">
                    <div class="content_job_list_button_left">
                        <div style="font-size: 20px;">${get_company.company_name}</div>
                        <div>${get_company.company_description}</div>                    
                        <div>${get_country}</div>                    
                        <div>${get_province}</div>                    
                        <div>${get_district}</div>                    
                        <div>${get_company.company_address}</div>
                    </div>
                    <div class="content_job_list_button_right">
                        <img src="${get_company.company_picture}" class="content_job_list_button_image">
                    </div>
                </div>
                `;
            } else {
                content_job_list_frame.innerHTML += `
                <div class="content_job_list_button">
                    <div class="content_job_list_button_left">
                        <div style="font-size: 20px;">${get_company.company_name}</div>
                        <div>${get_company.company_description}</div>                    
                        <div>${get_country}</div>                    
                        <div>${get_province}</div>                    
                        <div>${get_district}</div>                    
                        <div>${get_company.company_address}</div>
                    </div>
                    <div class="content_job_list_button_right">
                        <img src="${get_company.company_picture}" class="content_job_list_button_image">
                    </div>
                </div>
                `;                
            }
        });
    } else {
        content_job_list_frame.innerHTML = `
        <div class="content_job_list_no_data_title">No Data</div>
        `;
    }
}

// ==========================================================================================================================
function search_company(company_id) {
    get_company = null;
    company.forEach((element) => {
        if(element.company_id === company_id) {            
            get_company = element;
            return
        }
    });
    return get_company
}

function search_district_province_country(district_id) {
    district_name = null;
    province_name = null;
    country_district_name = null;
    district.forEach((element1) => {
        if(element1.district_id === district_id) {
            province.forEach((element2) => {
                if(element2.province_id === element1.province_id) {                
                    country.forEach((element3) => {
                        if(element3.country_id === element2.country_id) {
                            district_name = element1.district_name;
                            province_name = element2.province_name;
                            country_name = element3.country_name;
                            return;
                        }
                    });
                    return;
                }
            });
            return;
        }
    });
    return [district_name, province_name, country_name];
}