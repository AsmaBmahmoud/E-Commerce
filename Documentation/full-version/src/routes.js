import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const DashboardEcommerce = React.lazy(() => import('./Demo/Dashboard/Ecommerce'));
const DashboardCrm = React.lazy(() => import('./Demo/Dashboard/Crm'));
const DashboardAnalytics = React.lazy(() => import('./Demo/Dashboard/Analytics'));
const DashboardCrypto = React.lazy(() => import('./Demo/Dashboard/Crypto'));
const DashboardProject = React.lazy(() => import('./Demo/Dashboard/Project'));

const LayoutHorizontal = React.lazy(() => import('./Demo/PageLayout/Horizontal'));
const LayoutStatic = React.lazy(() => import('./Demo/PageLayout/Vertical/Static'));
const LayoutFixed = React.lazy(() => import('./Demo/PageLayout/Vertical/Fixed'));
const LayoutNavFixed = React.lazy(() => import('./Demo/PageLayout/Vertical/NavFixed'));
const LayoutCollapseMenu = React.lazy(() => import('./Demo/PageLayout/Vertical/CollapseMenu'));
const LayoutBox = React.lazy(() => import('./Demo/PageLayout/BoxLayout'));
const LayoutRtl = React.lazy(() => import('./Demo/PageLayout/RtlLayout'));
const LayoutLight = React.lazy(() => import('./Demo/PageLayout/LightLayout'));
const LayoutDark = React.lazy(() => import('./Demo/PageLayout/DarkLayout'));
const LayoutColorIcon = React.lazy(() => import('./Demo/PageLayout/ColorIcon'));

const WdgtStatistic = React.lazy(() => import('./Demo/Widget/WdgtStatistic'));
const WdgtData = React.lazy(() => import('./Demo/Widget/WdgtData'));
const WdgtTable = React.lazy(() => import('./Demo/Widget/WdgtTable'));
const WdgtUsers = React.lazy(() => import('./Demo/Widget/WdgtUsers'));
const WdgetChart = React.lazy(() => import('./Demo/Widget/WdgetChart'));

const UIBasicAlert = React.lazy(() => import('./Demo/UIElements/Basic/Alert'));
const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));
const UIBasicCards = React.lazy(() => import('./Demo/UIElements/Basic/Cards'));
const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicCarousels = React.lazy(() => import('./Demo/UIElements/Basic/Carousels'));
const UIBasicGridSystem = React.lazy(() => import('./Demo/UIElements/Basic/GridSystem'));
const UIBasicProgress = React.lazy(() => import('./Demo/UIElements/Basic/Progress'));
const UIBasicModals = React.lazy(() => import('./Demo/UIElements/Basic/Modals'));
const UIBasicSpinner = React.lazy(() => import('./Demo/UIElements/Basic/Spinner'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));
const UIBasicBasicTooltipsPopovers = React.lazy(() => import('./Demo/UIElements/Basic/TooltipsPopovers'));
const UIBasicBasicOther = React.lazy(() => import('./Demo/UIElements/Basic/Other'));

const UIAdvanceAlert = React.lazy(() => import('./Demo/UIElements/Advance/Alert'));
const UIAdvanceDatepicker = React.lazy(() => import('./Demo/UIElements/Advance/Datepicker'));
const UIAdvanceTaskBoard = React.lazy(() => import('./Demo/UIElements/Advance/TaskBoard'));
const UIAdvanceLightBox = React.lazy(() => import('./Demo/UIElements/Advance/LightBox'));
const UIAdvanceModal = React.lazy(() => import('./Demo/UIElements/Advance/Modal'));
const UIAdvanceNotification = React.lazy(() => import('./Demo/UIElements/Advance/Notification'));
const UIAdvanceNestable = React.lazy(() => import('./Demo/UIElements/Advance/Nestable'));
const UIAdvancePNotify = React.lazy(() => import('./Demo/UIElements/Advance/PNotify'));
const UIAdvanceRating = React.lazy(() => import('./Demo/UIElements/Advance/Rating'));
const UIAdvanceRangeSlider = React.lazy(() => import('./Demo/UIElements/Advance/RangeSlider'));
const UIAdvanceSlider = React.lazy(() => import('./Demo/UIElements/Advance/Slider'));
const UIAdvanceSyntaxHighlighter = React.lazy(() => import('./Demo/UIElements/Advance/SyntaxHighlighter'));
const UIAdvanceTour = React.lazy(() => import('./Demo/UIElements/Advance/Tour'));
const UIAdvanceTree = React.lazy(() => import('./Demo/UIElements/Advance/Tree'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));
const FormsAdvance = React.lazy(() => import('./Demo/Forms/FormsAdvance'));
const FormsValidation = React.lazy(() => import('./Demo/Forms/FormsValidation'));
const FormsMasking = React.lazy(() => import('./Demo/Forms/FormsMasking'));
const FormsWizard = React.lazy(() => import('./Demo/Forms/FormsWizard'));
const FormsPicker = React.lazy(() => import('./Demo/Forms/FormsPicker'));
const FormsSelect = React.lazy(() => import('./Demo/Forms/FormsSelect'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));
const DataTables = React.lazy(() => import('./Demo/Tables/DataTables'));

const AmChart = React.lazy(() => import('./Demo/Charts/AmChart/index'));
const ChartJs = React.lazy(() => import('./Demo/Charts/ChartJs/index'));
const EChart = React.lazy(() => import('./Demo/Charts/EChart/index'));
const GoogleChart = React.lazy(() => import('./Demo/Charts/GoogleChart/index'));
const HighChart = React.lazy(() => import('./Demo/Charts/HighChart/index'));
const ReChart = React.lazy(() => import('./Demo/Charts/ReChart/index'));
const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));
const PeityChart = React.lazy(() => import('./Demo/Charts/PeityChart/index'));
const RadialChart = React.lazy(() => import('./Demo/Charts/RadialChart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));
const VectorMaps = React.lazy(() => import('./Demo/Maps/VectorMap/index'));


const AppMessages = React.lazy(() => import('./Demo/AppPages/Messages'));
const AppTaskList = React.lazy(() => import('./Demo/AppPages/Task/TaskList'));
const AppTaskBoard = React.lazy(() => import('./Demo/AppPages/Task/TaskBoard'));
const AppTaskDetails = React.lazy(() => import('./Demo/AppPages/Task/TaskDetails'));
const AppToDo = React.lazy(() => import('./Demo/AppPages/ToDo/ToDo'));
const AppNotes = React.lazy(() => import('./Demo/AppPages/ToDo/Notes'));
const AppGalleryGrid = React.lazy(() => import('./Demo/AppPages/Gallery/GalleryGrid'));
const AppMasonryGallery = React.lazy(() => import('./Demo/AppPages/Gallery/MasonryGallery'));
const AppGalleryAdvance = React.lazy(() => import('./Demo/AppPages/Gallery/GalleryAdvance'));

const ExtensionEditorCkClassic = React.lazy(() => import('./Demo/Extension/Editor/EditorCkClassic'));
const ExtensionEditorCkBalloon = React.lazy(() => import('./Demo/Extension/Editor/EditorCkBalloon'));
const ExtensionEditorCkInline = React.lazy(() => import('./Demo/Extension/Editor/EditorCkInline'));
const ExtensionEditorCkDocument = React.lazy(() => import('./Demo/Extension/Editor/EditorCkDocument'));
const ExtensionEditorJoditWYSIWYG = React.lazy(() => import('./Demo/Extension/Editor/EditorJoditWYSIWYG'));
const ExtensionEditorRichNib = React.lazy(() => import('./Demo/Extension/Editor/EditorRichNib'));
const ExtensionInvoiceBasic = React.lazy(() => import('./Demo/Extension/Invoice/InvoiceBasic'));
const ExtensionInvoiceSummary = React.lazy(() => import('./Demo/Extension/Invoice/InvoiceSummary'));
const ExtensionInvoiceList = React.lazy(() => import('./Demo/Extension/Invoice/InvoiceList'));
const ExtensionFullEventCalendar = React.lazy(() => import('./Demo/Extension/FullEventCalendar'));
const ExtensionFileUpload = React.lazy(() => import('./Demo/Extension/FileUpload'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/dashboard/e-commerce', exact: true, name: 'Ecommerce', component: DashboardEcommerce },
    { path: '/dashboard/crm', exact: true, name: 'CRM', component: DashboardCrm },
    { path: '/dashboard/analytics', exact: true, name: 'Analytics', component: DashboardAnalytics },
    { path: '/dashboard/crypto', exact: true, name: 'Crypto', component: DashboardCrypto },
    { path: '/dashboard/project', exact: true, name: 'Project', component: DashboardProject },
    { path: '/layout/horizontal', exact: true, name: 'Horizontal', component: LayoutHorizontal },
    { path: '/layout/static', exact: true, name: 'Static', component: LayoutStatic },
    { path: '/layout/fixed', exact: true, name: 'Fixed', component: LayoutFixed },
    { path: '/layout/nav-fixed', exact: true, name: 'Nav Fixed', component: LayoutNavFixed },
    { path: '/layout/collapse-menu', exact: true, name: 'Collapse Menu', component: LayoutCollapseMenu },
    { path: '/layout/box', exact: true, name: 'Box Layout', component: LayoutBox },
    { path: '/layout/rtl', exact: true, name: 'RTL Layout', component: LayoutRtl },
    { path: '/layout/light', exact: true, name: 'Light Layout', component: LayoutLight },
    { path: '/layout/dark', exact: true, name: 'Dark Layout', component: LayoutDark },
    { path: '/layout/color-icon', exact: true, name: 'Color Icon', component: LayoutColorIcon },
    { path: '/widget/wdgt-statistic', exact: true, name: 'Widget Statistic', component: WdgtStatistic },
    { path: '/widget/wdgt-data', exact: true, name: 'Widget Data', component: WdgtData },
    { path: '/widget/wdgt-table', exact: true, name: 'Widget Table', component: WdgtTable },
    { path: '/widget/wdgt-user', exact: true, name: 'Widget User', component: WdgtUsers },
    { path: '/widget/wdgt-chart', exact: true, name: 'Widget Chart', component: WdgetChart },
    { path: '/basic/alert', exact: true, name: 'Basic Alert', component: UIBasicAlert },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/cards', exact: true, name: 'Basic Cards', component: UIBasicCards },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/carousel', exact: true, name: 'Basic Carousels', component: UIBasicCarousels },
    { path: '/basic/grid-system', exact: true, name: 'Basic Grid System', component: UIBasicGridSystem },
    { path: '/basic/progress', exact: true, name: 'Basic Progress', component: UIBasicProgress },
    { path: '/basic/modal', exact: true, name: 'Basic Modals', component: UIBasicModals },
    { path: '/basic/spinner', exact: true, name: 'Basic Spinner', component: UIBasicSpinner },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/basic/tooltip-popovers', exact: true, name: 'Basic Tooltips Popovers', component: UIBasicBasicTooltipsPopovers },
    { path: '/basic/other', exact: true, name: 'Basic Other', component: UIBasicBasicOther },
    { path: '/advance/alert', exact: true, name: 'Sweet Alert', component: UIAdvanceAlert },
    { path: '/advance/datepicker', exact: true, name: 'Datepicker', component: UIAdvanceDatepicker },
    { path: '/advance/task-board', exact: true, name: 'Task Board', component: UIAdvanceTaskBoard },
    { path: '/advance/light-box', exact: true, name: 'Light Box', component: UIAdvanceLightBox },
    { path: '/advance/modal', exact: true, name: 'Animation Modal', component: UIAdvanceModal },
    { path: '/advance/notification', exact: true, name: 'Notification', component: UIAdvanceNotification },
    { path: '/advance/nestable', exact: true, name: 'Neastable', component: UIAdvanceNestable },
    { path: '/advance/p-notify', exact: true, name: 'P-Notify', component: UIAdvancePNotify },
    { path: '/advance/rating', exact: true, name: 'Rating', component: UIAdvanceRating },
    { path: '/advance/range-slider', exact: true, name: 'Range Slider', component: UIAdvanceRangeSlider },
    { path: '/advance/slider', exact: true, name: 'Slider', component: UIAdvanceSlider },
    { path: '/advance/syntax-highlighter', exact: true, name: 'Syntax Highlighter', component: UIAdvanceSyntaxHighlighter },
    { path: '/advance/tour', exact: true, name: 'Tour', component: UIAdvanceTour },
    { path: '/advance/tree-view', exact: true, name: 'Tree', component: UIAdvanceTree },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/forms/form-advance', exact: true, name: 'Forms Advance', component: FormsAdvance },
    { path: '/forms/form-validation', exact: true, name: 'Forms Validation', component: FormsValidation },
    { path: '/forms/form-masking', exact: true, name: 'Forms Masking', component: FormsMasking },
    { path: '/forms/form-wizard', exact: true, name: 'Forms Wizard', component: FormsWizard },
    { path: '/forms/form-picker', exact: true, name: 'Forms Picker', component: FormsPicker },
    { path: '/forms/form-select', exact: true, name: 'Forms Select', component: FormsSelect },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/tables/datatable', exact: true, name: 'Data Table', component: DataTables },
    { path: '/charts/amchart', exact: true, name: 'Am Chart 4', component: AmChart },
    { path: '/charts/chart-js', exact: true, name: 'Chart JS', component: ChartJs },
    { path: '/charts/e-chart', exact: true, name: 'E Chart', component: EChart },
    { path: '/charts/google-chart', exact: true, name: 'Google Chart', component: GoogleChart },
    { path: '/charts/high-chart', exact: true, name: 'High Chart', component: HighChart },
    { path: '/charts/re-chart', exact: true, name: 'Re Chart', component: ReChart },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/charts/peity', exact: true, name: 'Peity Chart', component: PeityChart },
    { path: '/charts/radial', exact: true, name: 'Radial Chart', component: RadialChart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/maps/vector', exact: true, name: 'Vector Map', component: VectorMaps },
    { path: '/message', exact: true, name: 'Message', component: AppMessages },
    { path: '/task/task-list', exact: true, name: 'Task List', component: AppTaskList },
    { path: '/task/task-board', exact: true, name: 'Task Board', component: AppTaskBoard },
    { path: '/task/task-detail', exact: true, name: 'Task Details', component: AppTaskDetails },
    { path: '/todo/todo-basic', exact: true, name: 'To Do', component: AppToDo },
    { path: '/todo/todo-notes', exact: true, name: 'Notes', component: AppNotes },
    { path: '/gallery/gallery-grid', exact: true, name: 'Gallery Grid', component: AppGalleryGrid },
    { path: '/gallery/gallery-masonry', exact: true, name: 'Gallery Masonry', component: AppMasonryGallery },
    { path: '/gallery/gallery-advance', exact: true, name: 'Gallery Advance', component: AppGalleryAdvance },
    { path: '/editor/ck-editor/ck-classic', exact: true, name: 'CK Editor Classic', component: ExtensionEditorCkClassic },
    { path: '/editor/ck-editor/ck-balloon', exact: true, name: 'CK Editor Balloon', component: ExtensionEditorCkBalloon },
    { path: '/editor/ck-editor/ck-inline', exact: true, name: 'CK Editor Inline', component: ExtensionEditorCkInline },
    { path: '/editor/ck-editor/ck-document', exact: true, name: 'CK Editor Document', component: ExtensionEditorCkDocument },
    { path: '/editor/jodit-wysiwyg', exact: true, name: 'Jodit WYSIWYG', component: ExtensionEditorJoditWYSIWYG },
    { path: '/editor/rich-editor', exact: true, name: 'Rich Editor', component: ExtensionEditorRichNib },
    { path: '/invoice/invoice-basic', exact: true, name: 'Basic Invoice', component: ExtensionInvoiceBasic },
    { path: '/invoice/invoice-summary', exact: true, name: 'Summary Invoice', component: ExtensionInvoiceSummary },
    { path: '/invoice/invoice-list', exact: true, name: 'Invoice List', component: ExtensionInvoiceList },
    { path: '/full-calendar', exact: true, name: 'Full Calendar', component: ExtensionFullEventCalendar },
    { path: '/file-upload', exact: true, name: 'File Upload', component: ExtensionFileUpload },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
];

export default routes;