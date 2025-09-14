## Chapter 1 - Exercises

1. **Làm quen với các file test mặc định**
   - Mở và đọc 2 file test có sẵn:
     - [example.spec.ts](/tests/example.spec.ts) 
     - [demo-todo-app.spec.ts](/tests-examples/demo-todo-app.spec.ts)  
   - Hiểu các thuật ngữ: `test()`, `expect()`, `page`, `locator`, `beforeEach`.  
   - Tip: dùng Search trên [Playwright Docs](https://playwright.dev/docs/intro) để tìm nhanh giải thích cho từng lệnh.

2. **Chạy test ở 2 chế độ**
   - **UI Mode**: `npx playwright test --ui`
   - **Command line**: `npx playwright test`  
   - So sánh sự khác biệt:  
     - UI Mode: giao diện trực quan, xem kết quả từng test, có trace viewer.  
     - CLI: chạy nhanh, phù hợp cho CI/CD.

3. **Xem qua các file cấu hình trong project**
   - [.gitignore](/.gitignore): định nghĩa file/thư mục không được commit.  
   - [package.json](/package.json): khai báo dependency, script.  
   - [package-lock.json](/package-lock.json): lock version dependency.  
   - [playwright.config.ts](/playwright.config.ts): cấu hình global (baseURL, timeout, reporter…).  
   - [tsconfig.json](/tsconfig.json): cấu hình TypeScript compiler.

---

### Notes

#### 1. AAA pattern (Arrange – Act – Assert)
- **Arrange**: setup dữ liệu, mở browser, vào đúng page.  
- **Act**: thực hiện hành động (click, nhập text, submit form).  
- **Assert**: xác nhận kết quả (so sánh text, URL, element hiển thị).  

#### 2. Page Object Model (POM)
- Pattern tách UI element + action của một page thành class riêng → code clean, dễ maintain.  
- Giảm duplicate selectors, dễ thay đổi khi UI update.

#### 3. Test suite structure trong Playwright
- `test.beforeAll` → chạy 1 lần trước tất cả test.  
- `test.beforeEach` → chạy trước mỗi test.  
- `test.afterEach` → chạy sau mỗi test.  
- `test.afterAll` → chạy 1 lần sau tất cả test.  

👉 Best practice: kết hợp **AAA + POM** để code rõ ràng.

#### 4. Cấu trúc thư mục gợi ý
playwright-e2e/
├─ package.json
├─ tsconfig.json
├─ playwright.config.ts
├─ .env # config runtime (BASE_URL, USER, PASS…)
├─ src/
│ ├─ fixtures/
│ │ └─ test-fixtures.ts
│ ├─ pages/
│ │ ├─ BasePage.ts
│ │ ├─ LoginPage.ts
│ │ └─ DashboardPage.ts
│ ├─ utils/
│ │ └─ test-ids.ts
│ └─ tests/
│ ├─ auth/
│ │ └─ login.spec.ts
│ └─ sanity/
│ └─ healthcheck.spec.ts
└─ README.md


#### 5. Cấu trúc chuẩn của 1 Page Object
- **Variables (Locators)**: khai báo element (`input`, `button`, `label`…), để private.  
- **Constructor**: nhận `page: Page` từ Playwright, gán `this.page`.  
- **Methods (Actions & Assertions)**:  
  - Hành động (click, nhập form…).  
  - Assertions (tách riêng như `assertLoginSuccess()`).  

👉 Đặt tên method tự nhiên: `login()`, `open()`, `assertErrorMessage()`.

---

### Bổ sung thêm (quan trọng cho beginner)
- **Trace Viewer**: chạy test với trace → `npx playwright test --trace on` rồi xem `npx playwright show-trace trace.zip`.  
- **Debugging**: dùng `page.pause()` để dừng test và debug selector.  
- **Cross-browser**: test mặc định chạy trên Chromium/Firefox/WebKit.  


npx playwright test --browser=all
- **CI/CD ready**: Playwright có sẵn config template cho GitHub Actions, GitLab, Jenkins. 

npx playwright codegen https://example.com
(dùng để record test nhanh).
