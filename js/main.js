const categorySection = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayCaregory(data.data.news_category));
};

const displayCaregory = (names) => {
  const caregoryDiv = document.getElementById("category-section");
  const newDiv = document.createElement("div");
  const ul = document.createElement("ul");
  ul.classList.add(
    "list-group",
    "list-group-horizontal",
    "justify-content-center"
  );
  // names.forEach((name) => {
  //   console.log(name);
  //   const li = document.createElement("li");
  //   li.classList.add("list-group-item", "border-0", "hover");
  //   li.innerHTML = `
  //   ${name.category_name}
  //   `;
  //   ul.appendChild(li);
  // });

  ul.innerHTML = `
  <li onclick="newsCategory('${names[0].category_id}')" class="list-group-item border-0 hover">${names[0].category_name}</li>
  <li onclick="newsCategory('${names[1].category_id}')" class="list-group-item border-0 hover">${names[1].category_name}</li>
  <li onclick="newsCategory('${names[2].category_id}')" class="list-group-item border-0 hover">${names[2].category_name}</li>
  <li onclick="newsCategory('${names[3].category_id}')" class="list-group-item border-0 hover">${names[3].category_name}</li>
  <li onclick="newsCategory('${names[4].category_id}')" class="list-group-item border-0 hover">${names[4].category_name}</li>
  <li onclick="newsCategory('${names[5].category_id}')" class="list-group-item border-0 hover">${names[5].category_name}</li>
  <li onclick="newsCategory('${names[6].category_id}')" class="list-group-item border-0 hover">${names[6].category_name}</li>
  <li onclick="newsCategory('${names[7].category_id}')" class="list-group-item border-0 hover">${names[7].category_name}</li>
  `;
  newDiv.appendChild(ul);
  caregoryDiv.appendChild(newDiv);
};

const newsCategory = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};

const displayNews = (news) => {
  // console.log(id.data.category_id);
  const getDisplayNews = document.getElementById("display-news");
  getDisplayNews.innerHTML = "";
  news.forEach((singleNews) => {
    console.log(singleNews);
    const singleNewsDiv = document.createElement("div");
    singleNewsDiv.classList.add("card", "mb-3");
    singleNewsDiv.innerHTML = `
    <div class="row g-2">
    <div class="col-md-3">
      <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title">${singleNews.title}</h5>
        <p class="card-text">
        ${singleNews.details}
        </p>
      </div>
      <div class="d-flex py-2 justify-content-between">

                  <div class="d-flex px-3">
                    <img src="${singleNews.author.img}" alt="" class="img-fluid rounded-circle" style="width: 30px; height: 30px" />
                    <p class="ps-3">${singleNews.author.name}</p>
                  </div>

                  <div class="d-flex">
                    <i class="bi bi-eye"></i>
                    <p>1.5 M</p>
                  </div>

                  <div class="px-3">
                    <button class="btn">
                      <i class="bi bi-arrow-right fs-5"></i>
                    </button>
                  </div>
                </div>
    </div>
  </div>
    `;
    getDisplayNews.appendChild(singleNewsDiv);
  });

  if (getDisplayNews.innerHTML !== "") {
    return;
  } else {
    // console.log("no news");
    const getDisplayNews = document.getElementById("display-news");
    getDisplayNews.innerHTML = `
       <h3 class="text-center text-danger py-5">No News Found</h3>
     `;
  }
};

// newsCategory();

categorySection();
