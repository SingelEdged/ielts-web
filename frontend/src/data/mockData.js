// This file contains hard‑coded data used by the legacy mockApi implementation.
// It is kept only as a fallback when `VITE_USE_MOCK=true`. Once your backend
// is ready you can safely delete this module and remove the environment flag.

export const mockTeacher = {
  id: 1,
  name: 'Nguyễn Thị Minh Châu',
  title: 'IELTS Expert & English Communication Coach',
  bio: 'Với hơn 12 năm kinh nghiệm giảng dạy IELTS và tiếng Anh giao tiếp, cô Châu đã giúp hơn 2,000 học sinh đạt được điểm số mơ ước. Cô từng học tập và làm việc tại Úc, Anh và Singapore, mang về phương pháp giảng dạy tiên tiến nhất từ các nước nói tiếng Anh.',
  shortBio: '12 năm kinh nghiệm. IELTS 8.5. Cựu giảng viên Đại học RMIT Việt Nam.',
  photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
  experience: 12,
  studentsCount: 2000,
  rating: 4.9,
  certificates: ['IELTS 8.5', 'CELTA Cambridge', 'TESOL Certified', 'M.Ed. RMIT'],
  achievements: [
    { icon: '🏆', label: 'IELTS Score', value: '8.5/9.0' },
    { icon: '👨‍🎓', label: 'Học sinh', value: '2,000+' },
    { icon: '⭐', label: 'Kinh nghiệm', value: '12 năm' },
    { icon: '🎓', label: 'Đạt 7.0+', value: '95%' },
  ],
}

export const mockCourses = [
  {
    id: 1,
    title: 'IELTS Intensive 6.5+',
    slug: 'ielts-intensive-65',
    description: 'Khóa học luyện thi IELTS chuyên sâu dành cho học sinh muốn đạt band 6.5 trong 3 tháng. Chương trình bao gồm tất cả 4 kỹ năng Listening, Reading, Writing và Speaking.',
    shortDescription: 'Chinh phục IELTS 6.5 trong 3 tháng với phương pháp luyện thi chuyên sâu.',
    category: 'IELTS',
    level: 'Intermediate',
    duration: '3 tháng (48 buổi)',
    schedule: 'Tối 2-4-6 hoặc 3-5-7',
    price: 8500000,
    originalPrice: 10500000,
    currency: 'VND',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['IELTS', 'Writing', 'Speaking', 'Listening', 'Reading'],
    highlights: ['Luyện đề Cambridge thực tế', 'Chấm bài Writing chi tiết', 'Mock test hàng tuần', 'Hỗ trợ 24/7 qua Zalo'],
    targetScore: '6.5+',
    enrolledCount: 24,
    maxStudents: 30,
    isFeatured: true,
    isHot: true,
    startDate: '2024-02-15',
  },
  {
    id: 2,
    title: 'IELTS Advanced 7.0+',
    slug: 'ielts-advanced-70',
    description: 'Khóa học nâng cao dành cho học sinh đã có nền tảng, muốn đạt band 7.0 trở lên để du học Mỹ, Anh, Úc hoặc Canada.',
    shortDescription: 'Vươn tới IELTS 7.0+ với chiến lược thi chuẩn xác nhất.',
    category: 'IELTS',
    level: 'Advanced',
    duration: '4 tháng (64 buổi)',
    schedule: 'Tối 2-4-6',
    price: 11000000,
    originalPrice: 13500000,
    currency: 'VND',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['IELTS', 'Academic', 'Writing Task 2', 'Speaking'],
    highlights: ['Chiến lược Writing Task 2 nâng cao', 'Luyện Speaking với người bản ngữ', 'Bộ đề dự đoán cập nhật', 'Cam kết đạt điểm'],
    targetScore: '7.0+',
    enrolledCount: 18,
    maxStudents: 20,
    isFeatured: true,
    isHot: false,
    startDate: '2024-03-01',
  },
  {
    id: 3,
    title: 'TOEIC 750+ Cấp tốc',
    slug: 'toeic-750-cap-toc',
    description: 'Luyện thi TOEIC cấp tốc trong 2 tháng, phù hợp cho người đi làm cần chứng chỉ nhanh. Tập trung vào Part 5, 6, 7 và các dạng nghe thường gặp.',
    shortDescription: 'Đạt TOEIC 750+ trong 2 tháng dù bận rộn đến đâu.',
    category: 'TOEIC',
    level: 'Intermediate',
    duration: '2 tháng (32 buổi)',
    schedule: 'Cuối tuần T7-CN',
    price: 5500000,
    originalPrice: 7000000,
    currency: 'VND',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['TOEIC', 'Business English', 'Cấp tốc'],
    highlights: ['Tập trung Part 5-7', 'Full Test mỗi tuần', 'Phù hợp người đi làm', 'Tài liệu ETS chính hãng'],
    targetScore: '750+',
    enrolledCount: 28,
    maxStudents: 35,
    isFeatured: true,
    isHot: true,
    startDate: '2024-02-20',
  },
  {
    id: 4,
    title: 'Giao Tiếp Tiếng Anh Tự Tin',
    slug: 'giao-tiep-tu-tin',
    description: 'Khóa học tiếng Anh giao tiếp thực tế, giúp bạn tự tin nói tiếng Anh trong công việc và cuộc sống. Phương pháp học qua tình huống thực tế.',
    shortDescription: 'Nói tiếng Anh lưu loát và tự tin sau 3 tháng học thực chiến.',
    category: 'Communication',
    level: 'All Levels',
    duration: '3 tháng (36 buổi)',
    schedule: 'Linh hoạt theo nhu cầu',
    price: 6500000,
    originalPrice: 8000000,
    currency: 'VND',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Giao tiếp', 'Thực hành', 'Business English', 'Daily Life'],
    highlights: ['Thực hành theo tình huống thực', 'Sửa phát âm trực tiếp', 'Xây dựng từ vựng theo chủ đề', 'Lớp học nhỏ (max 8 người)'],
    enrolledCount: 16,
    maxStudents: 20,
    isFeatured: false,
    isHot: false,
    startDate: '2024-03-10',
  },
  {
    id: 5,
    title: 'Tiếng Anh Thiếu Nhi (6-12 tuổi)',
    slug: 'tieng-anh-thieu-nhi',
    description: 'Chương trình tiếng Anh thiếu nhi theo chuẩn Cambridge YLE, giúp trẻ phát triển toàn diện 4 kỹ năng ngay từ nhỏ.',
    shortDescription: 'Nền tảng tiếng Anh vững chắc cho bé với chương trình Cambridge YLE.',
    category: 'Kids',
    level: 'Beginner',
    duration: '6 tháng (72 buổi)',
    schedule: 'Chiều T2-T4-T6 hoặc T3-T5-T7',
    price: 4500000,
    originalPrice: 5500000,
    currency: 'VND',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Thiếu nhi', 'Cambridge YLE', 'Starters', 'Movers', 'Flyers'],
    highlights: ['Giáo trình Cambridge YLE', 'Học qua trò chơi và bài hát', 'Lớp nhỏ tối đa 10 em', 'Báo cáo tiến độ hàng tháng'],
    enrolledCount: 20,
    maxStudents: 25,
    isFeatured: false,
    isHot: false,
    startDate: '2024-03-05',
  },
  {
    id: 6,
    title: 'Grammar & Vocabulary Foundation',
    slug: 'grammar-vocabulary',
    description: 'Xây dựng nền tảng ngữ pháp và từ vựng tiếng Anh vững chắc cho người mới bắt đầu hoặc cần ôn lại kiến thức cơ bản.',
    shortDescription: 'Ngữ pháp và từ vựng nền tảng - bước đệm cho mọi kỳ thi.',
    category: 'Grammar',
    level: 'Beginner',
    duration: '2 tháng (24 buổi)',
    schedule: 'Tối 3-5 hoặc T7',
    price: 3500000,
    originalPrice: 4500000,
    currency: 'VND',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Grammar', 'Vocabulary', 'Foundation', 'Beginner'],
    highlights: ['Ngữ pháp từ A đến Z', 'Flashcard từ vựng theo chủ đề', 'Bài tập thực hành mỗi buổi', 'Video ôn luyện online'],
    enrolledCount: 22,
    maxStudents: 30,
    isFeatured: false,
    isHot: false,
    startDate: '2024-02-25',
  },
]

export const mockBlogPosts = [
  {
    id: 1,
    title: '10 Bí Quyết Viết IELTS Writing Task 2 Đạt Band 7.0+',
    slug: 'bi-quyet-writing-task-2-band-7',
    excerpt: 'Khám phá những chiến lược viết luận IELTS hiệu quả nhất giúp bạn chinh phục band 7.0 trong kỳ thi sắp tới.',
    content: '',
    category: 'IELTS Tips',
    tags: ['IELTS', 'Writing', 'Tips'],
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Cô Minh Châu',
    publishedAt: '2024-01-20',
    readTime: 8,
    viewCount: 1240,
  },
  {
    id: 2,
    title: 'IELTS Speaking Part 2: Cách Kể Chuyện Hấp Dẫn Đạt Điểm Cao',
    slug: 'ielts-speaking-part-2',
    excerpt: 'Hướng dẫn chi tiết cách xây dựng câu chuyện trong IELTS Speaking Part 2 để gây ấn tượng với giám khảo.',
    content: '',
    category: 'IELTS Tips',
    tags: ['IELTS', 'Speaking', 'Tips'],
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Cô Minh Châu',
    publishedAt: '2024-01-15',
    readTime: 6,
    viewCount: 980,
  },
  {
    id: 3,
    title: 'TOEIC vs IELTS: Chứng Chỉ Nào Phù Hợp Với Bạn?',
    slug: 'toeic-vs-ielts-chung-chi-nao-phu-hop',
    excerpt: 'So sánh chi tiết giữa TOEIC và IELTS để giúp bạn lựa chọn đúng chứng chỉ phù hợp với mục tiêu của mình.',
    content: '',
    category: 'Hướng Dẫn',
    tags: ['TOEIC', 'IELTS', 'Tư vấn'],
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Cô Minh Châu',
    publishedAt: '2024-01-10',
    readTime: 10,
    viewCount: 2100,
  },
  {
    id: 4,
    title: 'Học Tiếng Anh Giao Tiếp Hiệu Quả Với Người Đi Làm',
    slug: 'hoc-tieng-anh-giao-tiep-nguoi-di-lam',
    excerpt: 'Phương pháp học tiếng Anh thực tế dành cho người bận rộn, giúp bạn tiến bộ mỗi ngày chỉ 30 phút.',
    content: '',
    category: 'Tiếng Anh Giao Tiếp',
    tags: ['Giao tiếp', 'Luyện tập', 'Người đi làm'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Cô Minh Châu',
    publishedAt: '2024-01-05',
    readTime: 7,
    viewCount: 756,
  },
  {
    id: 5,
    title: 'Top 100 Từ Vựng IELTS Quan Trọng Nhất Năm 2024',
    slug: 'top-100-tu-vung-ielts-2024',
    excerpt: 'Danh sách 100 từ vựng học thuật cần thiết nhất cho kỳ thi IELTS, có kèm ví dụ và cách dùng thực tế.',
    content: '',
    category: 'Từ Vựng',
    tags: ['Từ vựng', 'IELTS', 'Academic'],
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Cô Minh Châu',
    publishedAt: '2024-01-02',
    readTime: 15,
    viewCount: 3200,
  },
  {
    id: 6,
    title: 'Lịch Thi IELTS 2024 Tại TP.HCM - Cập Nhật Mới Nhất',
    slug: 'lich-thi-ielts-2024-tphcm',
    excerpt: 'Tổng hợp lịch thi IELTS Academic và General Training tại TP.HCM trong năm 2024, cùng thông tin đăng ký thi.',
    content: '',
    category: 'Thông Tin Thi',
    tags: ['Lịch thi', 'IELTS', 'TP.HCM'],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Cô Minh Châu',
    publishedAt: '2023-12-28',
    readTime: 5,
    viewCount: 4500,
  },
]

export const mockTestimonials = [
  {
    id: 1,
    studentName: 'Trần Văn Hùng',
    studentPhoto: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
    courseTaken: 'IELTS Intensive 6.5+',
    scoreBefore: '5.0',
    scoreAfter: '7.0',
    targetScore: '6.5',
    review: 'Sau 3 tháng học với cô Châu, điểm IELTS của mình tăng từ 5.0 lên 7.0, vượt mục tiêu đề ra! Cô dạy rất chi tiết và luôn sửa lỗi tận tình. Giờ mình đã được nhận vào Đại học Melbourne.',
    rating: 5,
    date: '2023-12-15',
    university: 'Đại học Melbourne, Úc',
  },
  {
    id: 2,
    studentName: 'Nguyễn Thị Lan Anh',
    studentPhoto: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
    courseTaken: 'IELTS Advanced 7.0+',
    scoreBefore: '6.5',
    scoreAfter: '8.0',
    targetScore: '7.5',
    review: 'Mình không nghĩ mình có thể đạt 8.0 sau chỉ 4 tháng. Cô Châu đã giúp mình nhìn ra những lỗi Writing mà mình không tự nhận ra được. Phương pháp dạy rất thực tế và hiệu quả.',
    rating: 5,
    date: '2023-11-20',
    university: 'University of Edinburgh, UK',
  },
  {
    id: 3,
    studentName: 'Phạm Minh Đức',
    studentPhoto: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    courseTaken: 'TOEIC 750+ Cấp tốc',
    scoreBefore: '550',
    scoreAfter: '845',
    targetScore: '750',
    review: 'Mình vừa đi làm vừa học, nhưng cô luôn hỗ trợ tài liệu và giải đáp thắc mắc qua Zalo. Chỉ 2 tháng mà TOEIC tăng từ 550 lên 845, sếp mình rất ấn tượng!',
    rating: 5,
    date: '2023-10-30',
  },
  {
    id: 4,
    studentName: 'Lê Thị Hoa',
    studentPhoto: 'https://images.pexels.com/photos/3807530/pexels-photo-3807530.jpeg?auto=compress&cs=tinysrgb&w=200',
    courseTaken: 'Giao Tiếp Tiếng Anh Tự Tin',
    scoreBefore: 'Không dám nói',
    scoreAfter: 'Tự tin giao tiếp',
    targetScore: 'Giao tiếp thực tế',
    review: 'Trước đây mình sợ nói tiếng Anh dù đọc được. Sau khóa học với cô Châu, mình đã tự tin họp với đối tác nước ngoài và thậm chí đi phỏng vấn bằng tiếng Anh thành công.',
    rating: 5,
    date: '2023-10-15',
  },
]

export const mockFAQs = [
  {
    id: 1,
    question: 'Lớp học có bao nhiêu học sinh?',
    answer: 'Lớp học tối đa 15 học sinh để đảm bảo chất lượng giảng dạy. Một số khóa đặc biệt như IELTS nâng cao chỉ có tối đa 8 người để cô có thể chú ý từng học sinh.',
    category: 'Chung',
  },
  {
    id: 2,
    question: 'Trung tâm có cam kết đầu ra không?',
    answer: 'Có! Trung tâm cam kết 95% học sinh đạt điểm mục tiêu. Nếu học sinh học đầy đủ buổi và làm đủ bài tập về nhà nhưng không đạt mục tiêu, học sinh được học lại miễn phí.',
    category: 'Học phí',
  },
  {
    id: 3,
    question: 'Học phí có được hoàn trả không?',
    answer: 'Học sinh có thể hoàn trả 80% học phí nếu hủy trước ngày khai giảng 7 ngày. Sau khi khai giảng, học phí không được hoàn trả nhưng học sinh có thể bảo lưu để học khóa tiếp theo.',
    category: 'Học phí',
  },
  {
    id: 4,
    question: 'Lịch học có linh hoạt không?',
    answer: 'Trung tâm có nhiều ca học khác nhau: sáng, chiều, tối các ngày trong tuần và cuối tuần. Học sinh có thể chọn lịch học phù hợp với công việc và học tập.',
    category: 'Lịch học',
  },
  {
    id: 5,
    question: 'Tôi cần trình độ gì để học IELTS Intensive?',
    answer: 'Khóa IELTS Intensive phù hợp với học sinh có trình độ từ Pre-intermediate trở lên (tương đương IELTS 4.5-5.0). Trung tâm có bài test đầu vào miễn phí để xếp lớp phù hợp.',
    category: 'Khóa học',
  },
  {
    id: 6,
    question: 'Tài liệu học có được cung cấp không?',
    answer: 'Tất cả tài liệu học tập bao gồm sách giáo trình, đề thi mẫu, và tài liệu bổ sung đều được trung tâm cung cấp. Học sinh chỉ cần mang theo bút và sổ tay.',
    category: 'Tài liệu',
  },
  {
    id: 7,
    question: 'Có hỗ trợ online không?',
    answer: 'Cô Châu hỗ trợ học sinh qua nhóm Zalo lớp học 24/7. Học sinh có thể gửi bài Writing để cô chấm và giải đáp thắc mắc bất kỳ lúc nào.',
    category: 'Hỗ trợ',
  },
  {
    id: 8,
    question: 'Trung tâm ở đâu?',
    answer: 'Trung tâm tọa lạc tại Quận 3, TP. Hồ Chí Minh. Địa chỉ cụ thể: 123 Đường Nguyễn Thị Minh Khai, Phường 5, Quận 3. Gần cung đường xe buýt và dễ đỗ xe.',
    category: 'Địa điểm',
  },
]

export const mockStats = [
  { label: 'Học Sinh Đã Tốt Nghiệp', value: '2,000', icon: '👨‍🎓', suffix: '+' },
  { label: 'Tỷ Lệ Đạt Mục Tiêu', value: '95', icon: '🎯', suffix: '%' },
  { label: 'Năm Kinh Nghiệm', value: '12', icon: '⭐', suffix: '+' },
  { label: 'Điểm IELTS Trung Bình', value: '7.2', icon: '📊', suffix: '' },
]

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const mockApi = {
  async getTeacher() {
    await delay(400)
    return { data: mockTeacher, success: true, message: 'OK' }
  },
  async getCourses(category) {
    await delay(600)
    const data = category ? mockCourses.filter(c => c.category === category) : mockCourses
    return { data, success: true, message: 'OK' }
  },
  async getCourse(slug) {
    await delay(400)
    const data = mockCourses.find(c => c.slug === slug) || null
    return { data, success: !!data, message: data ? 'OK' : 'Not found' }
  },
  async getBlogPosts(page = 1, perPage = 4) {
    await delay(500)
    const start = (page - 1) * perPage
    const data = mockBlogPosts.slice(start, start + perPage)
    return {
      data,
      total: mockBlogPosts.length,
      page,
      perPage,
      lastPage: Math.ceil(mockBlogPosts.length / perPage),
      success: true,
    }
  },
  async getBlogPost(slug) {
    await delay(400)
    const data = mockBlogPosts.find(p => p.slug === slug) || null
    return { data, success: !!data, message: data ? 'OK' : 'Not found' }
  },
  async getTestimonials() {
    await delay(500)
    return { data: mockTestimonials, success: true, message: 'OK' }
  },
  async getFAQs() {
    await delay(300)
    return { data: mockFAQs, success: true, message: 'OK' }
  },
  async getStats() {
    await delay(200)
    return { data: mockStats, success: true, message: 'OK' }
  },
  async submitRegistration(form) {
    await delay(1000)
    console.log('Registration submitted:', form)
    return { success: true, message: 'Đăng ký thành công! Cô sẽ liên hệ với bạn trong 24 giờ.' }
  },
  async submitContact(form) {
    await delay(800)
    console.log('Contact submitted:', form)
    return { success: true, message: 'Tin nhắn đã được gửi! Cô sẽ phản hồi sớm nhất có thể.' }
  },
}
