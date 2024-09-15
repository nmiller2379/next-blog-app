# **User Stories for Simple Blog or News Article Website**
This activity will give you practice working with Next.js. You can use your `next-template` to complete this project. It is done when the user stories and acceptance criteria are met. Use dummyJSON to generate sample data for your blog posts.

1. **Homepage Blog List**
   - **As a user**, I want to visit the homepage and see a list of blog posts, so that I can quickly find and read articles of interest.
   - **Acceptance Criteria**:
     - The homepage should display a list of at least 5 blog posts.
     - Each blog post should show the title, a brief excerpt (first 100 characters), and a link to the full post.
     - Each post should be clickable, directing the user to the full article page.

2. **Dynamic Blog Post Page**
   - **As a user**, I want to click on a blog post from the homepage and be taken to a page where I can read the full content of the post, so that I can consume the entire article.
   - **Acceptance Criteria**:
     - Clicking on any blog post on the homepage should navigate to a separate dynamic route with the full content of the post.
     - The post page should include the post's title and full body content.
     - The post page should have a unique URL (e.g., `/posts/1`).

3. **Search or Filter Posts**
   - **As a user**, I want to search or filter through the list of blog posts on the homepage, so that I can easily find posts related to specific topics.
   - **Acceptance Criteria**:
     - The homepage should have a search input field.
     - As I type into the search bar, the list of posts should update in real-time to display only those that match the search term.
     - The search should be case-insensitive and should filter based on post titles.

4. **About Page**
   - **As a user**, I want to read about the purpose and content of the blog, so that I understand the focus of the website.
   - **Acceptance Criteria**:
     - There should be an "About" page accessible from a link in the header or footer.
     - The "About" page should include a description of the blog’s purpose or mission.
     - The "About" page should be static and have a URL like `/about`.

5. **Responsive Design**
   - **As a user**, I want the website to be easy to read and navigate on both desktop and mobile devices, so that I can access the content regardless of the device I’m using.
   - **Acceptance Criteria**:
     - The website should be responsive and adapt to different screen sizes.
     - On mobile devices, the layout should adjust to display content appropriately without horizontal scrolling.

6. **Contact Form (Optional)**
   - **As a user**, I want to fill out a contact form to reach out to the website owner, so that I can share feedback or ask questions.
   - **Acceptance Criteria**:
     - There should be a contact form on a separate page with fields for name, email, and message.
     - The form should have basic validation (e.g., required fields, valid email address).
     - Submitting the form should log the data to the console or trigger an alert (if no backend is involved).

### **Stretch User Stories**

7. **Pagination for Blog Posts**
   - **As a user**, I want to see only a limited number of posts per page, so that I can navigate large collections of posts easily.
   - **Acceptance Criteria**:
     - The homepage should show a limited number of posts (e.g., 5 per page).
     - The user should be able to navigate between pages of posts using pagination controls.
