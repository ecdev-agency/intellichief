<!DOCTYPE html>
<!--[if lt IE 8]><html lang="en-us" class="report no-js lt-ie8"> <![endif]-->
<!--[if gte IE 8]><!--><html lang="en-us" class="report no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>PDF Report</title>
    <link rel="stylesheet" href="<?= get_stylesheet_directory_uri() . '/assets/calc/assets/css/bundle.css' ?>">
</head>
<body class="report">
<!-- PDF -->
<div id="report-to-pdf">

    <!-- page 1 -->
    <div class="report__page page_1">

        <!-- Container -->
        <div class="report__page-wrapper">

            <!-- header -->
            <div class="report__page-header page_1__header">

                <!-- Center -->
                <div>

                    <!-- Title -->
                    <h1 class="page_1__header-title">
                        Accounts Payable Automation Review
                    </h1>
                    <!-- End Title -->

                    <!-- Excerpt -->
                    <div class="page_1__header-excerpt">
                        <span>PREPARED FOR</span> <p>Company Name</p>
                    </div>
                    <!-- End Excerpt -->

                </div>
                <!-- End Center -->

                <img src="<?= get_stylesheet_directory_uri() ?>/assets/calc/assets/images/report/page-1-header.jpg" alt="">

            </div>
            <!-- end header -->

            <!-- content -->
            <div class="page_1__content">

                <!-- excerpt -->
                <div class="page_1__content-excerpt">
                    <p>Hi *Insert First Name*, we have reviewed the information you submitted to our AP Automation Savings Calculator. This report provides an in-depth exploration of your organization’s unique business case for AP Automation based on the information you provided.</p> <strong>If you have any questions regarding the information contained within this document, please send an email to info@intellichief.com to speak with an IntelliChief representative.</strong>
                </div>
                <!-- end excerpt -->

                <!-- savings -->
                <div class="page_1__content-savings">

                    <!-- title -->
                    <h2 class="page_1__content-savings-title">
                        Your Projected Savings
                    </h2>
                    <!-- end title -->

                    <!-- table -->
                    <div class="page_1__content-savings-table">

                        <!-- header -->
                        <div class="page_1__content-savings-table-header">

                            <!-- left -->
                            <div class="left">

                            </div>
                            <!-- end left -->

                            <!-- right -->
                            <div class="right">

                                <!-- column -->
                                <div class="column">
                                    <span>Before AP Automation</span>
                                    <span class="orange">After AP Automation</span>
                                </div>
                                <!-- end column -->

                            </div>
                            <!-- end right -->

                        </div>
                        <!-- end header -->

                        <!-- tbl -->
                        <div class="page_1__content-savings-table-tbl">

                            <!-- tr -->
                            <div class="tr">

                                <!-- left -->
                                <div class="left">
                                    Average Cost to Process an AP Invoice
                                </div>
                                <!-- end left -->

                                <!-- right -->
                                <div class="right">

                                    <!-- column -->
                                    <div class="column">
                                        <span id="before_average_cost_to_process_an_ap_invoice">$000,000</span>
                                        <span id="before_total_cost_to_process_ap_invoices">$000,000</span>
                                    </div>
                                    <!-- end column -->

                                </div>
                                <!-- end right -->

                            </div>
                            <!-- end tr -->

                            <!-- tr -->
                            <div class="tr">

                                <!-- left -->
                                <div class="left">
                                    Total Annual Cost to Process AP Invoices
                                </div>
                                <!-- end left -->

                                <!-- right -->
                                <div class="right">

                                    <!-- column -->
                                    <div class="column">
                                        <span id="after_average_cost_to_process_an_ap_invoice">$000,000</span>
                                        <span id="after_total_cost_to_process_ap_invoices">$000,000</span>
                                    </div>
                                    <!-- end column -->

                                </div>
                                <!-- end right -->

                            </div>
                            <!-- end tr -->

                        </div>
                        <!-- end tbl -->

                    </div>
                    <!-- end table -->

                </div>
                <!-- end savings -->

                <!-- list -->
                <ul class="page_1__content-list">

                    <li>

                        <!-- inner -->
                        <div class="page_1__content-list-inner">

                            <small>Year 1</small>

                            <span id="total_savings_year_1">$0</span>

                            <p>TOTAL ESTIMATED ANNUAL SAVINGS</p>

                        </div>
                        <!-- end inner -->

                    </li>

                    <li>

                        <!-- inner -->
                        <div class="page_1__content-list-inner">

                            <small>Year 2</small>

                            <span id="total_savings_year_2">$0</span>

                            <p>TOTAL ESTIMATED ANNUAL SAVINGS</p>

                        </div>
                        <!-- end inner -->

                    </li>

                    <li>

                        <!-- inner -->
                        <div class="page_1__content-list-inner">

                            <small>Year 3</small>

                            <span id="total_savings_year_3">$0</span>

                            <p>TOTAL ESTIMATED ANNUAL SAVINGS</p>

                        </div>
                        <!-- end inner -->

                    </li>

                    <li>

                        <!-- inner -->
                        <div class="page_1__content-list-inner">

                            <small>Year 4</small>

                            <span id="total_savings_year_4">$0</span>

                            <p>TOTAL ESTIMATED ANNUAL SAVINGS</p>

                        </div>
                        <!-- end inner -->

                    </li>

                    <li>

                        <!-- inner -->
                        <div class="page_1__content-list-inner">

                            <small>Year 5</small>

                            <span id="total_savings_year_5">$0</span>

                            <p>TOTAL ESTIMATED ANNUAL SAVINGS</p>

                        </div>
                        <!-- end inner -->

                    </li>

                </ul>
                <!-- end list -->

                <!-- total -->
                <div class="page_1__content-total">

                    <!-- title -->
                    <h3 class="page_1__content-total-title" id="total_estimated_savings">
                        $0
                    </h3>
                    <!-- end title -->

                    <!-- subtitle -->
                    <div class="page_1__content-total-subtitle">
                        TOTAL ESTIMATED SAVINGS
                    </div>
                    <!-- end subtitle -->

                </div>
                <!-- end total -->

            </div>
            <!-- end content -->

        </div>
        <!-- End Container -->

        <!-- footer -->
        <div class="report__page-footer">

            <!-- logo -->
            <div class="report__page-footer-logo">

                <img src="<?= get_stylesheet_directory_uri() ?>/assets/calc/assets/images/report/logo.png" alt="">

            </div>
            <!-- end logo -->

        </div>
        <!-- end footer -->

    </div>
    <!-- end page 1 -->

    <!-- page 2 -->
    <div class="report__page page_2">

        <!-- Container -->
        <div class="report__page-wrapper">

            <!-- header -->
            <div class="report__page-header">

                <img src="<?= get_stylesheet_directory_uri() ?>/assets/calc/assets/images/report/header.jpg" alt="">

            </div>
            <!-- end header -->

            <!-- content -->
            <div class="page_2__content">

                <!-- graph -->
                <div class="page_2__content-graph">

                    <!-- title -->
                    <h2 class="page_2__content-graph-title">
                        Industry Benchmarks for AP Automation
                    </h2>
                    <!-- end title -->

                </div>
                <!-- end graph -->

                <!-- totals -->
                <div class="page_2__content-totals">

                    <!-- title -->
                    <h2 class="page_2__content-totals-title">
                        Your Projected Efficiency Savings
                    </h2>
                    <!-- end title -->

                    <!-- list -->
                    <ul class="page_2__content-totals-list">

                        <li>

                            <!-- inner -->
                            <div class="page_2__content-totals-list-inner">

                                <small>Cost Savings<br> from Eliminating</small>
                                <small class="orange">Late Payments</small>

                                <span id="late_payment_savings">$0</span>

                                <p>TOTAL ESTIMATED<br> ANNUAL SAVINGS</p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_2__content-totals-list-inner">

                                <small>Cost Savings<br> from Taking All</small>
                                <small class="orange">Early Pay Discounts</small>

                                <span id="early_payment_discount_savings">$0</span>

                                <p>TOTAL ESTIMATED<br> ANNUAL SAVINGS</p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_2__content-totals-list-inner">

                                <small>Cost Savings<br> from Eliminating</small>
                                <small class="orange">Duplicate Payments</small>

                                <span id="duplicate_payment_prevention_savings">$0</span>

                                <p>TOTAL ESTIMATED<br> ANNUAL SAVINGS</p>

                            </div>
                            <!-- end inner -->

                        </li>

                    </ul>
                    <!-- end list -->

                </div>
                <!-- end totals -->

                <!-- quote -->
                <div class="page_2__content-quote">

                    <!-- title -->
                    <div class="page_2__content-quote-title">

                        <!-- center -->
                        <div>
                            <span>DID</span>
                            <span>YOU</span>
                            <span>KNOW?</span>
                        </div>
                        <!-- end center -->

                    </div>
                    <!-- end title -->

                    <!-- text -->
                    <div class="page_2__content-quote-text">

                        <!-- center -->
                        <div>
                            <p>Late payments, missed early payment discounts, and duplicate payments are 100% preventable with AP Automation.</p>
                            IntelliChief continuously monitors and cross-references invoice data to ensure that payment terms are satisfied as quickly as possible. For the first time, paying invoices will improve your bottom line.
                        </div>
                        <!-- end center -->

                    </div>
                    <!-- end text -->

                </div>
                <!-- end quote -->

            </div>
            <!-- end content -->

        </div>
        <!-- End Container -->

        <!-- footer -->
        <div class="report__page-footer">


        </div>
        <!-- end footer -->

    </div>
    <!-- end page 2 -->

    <!-- page 3 -->
    <div class="report__page page_3">

        <!-- Container -->
        <div class="report__page-wrapper">

            <!-- header -->
            <div class="report__page-header">

                <img src="<?= get_stylesheet_directory_uri() ?>/assets/calc/assets/images/report/header.jpg" alt="">

            </div>
            <!-- end header -->

            <!-- content -->
            <div class="page_3__content">

                <!-- title -->
                <h2 class="page_3__content-title">
                    Your Projected People and Productivity Cost Savings
                </h2>
                <!-- end title -->

                <!-- column -->
                <div class="page_3__content-column">

                    <!-- left -->
                    <div class="page_3__content-column-left">

                        <!-- box -->
                        <div class="page_3__content-column-box">

                            <!-- center -->
                            <div>
                                <small>Cost Savings from</small>
                                <small class="orange">Reducing AP Staff with<br> AP Automation</small>
                                <span id="cost_savings_from_reducing_ap_staff_with_ap_automation">$0</span>
                                <p>TOTAL ESTIMATED<br> ANNUAL SAVINGS</p>
                            </div>
                            <!-- end center -->

                        </div>
                        <!-- end box -->

                        <!-- box -->
                        <div class="page_3__content-column-box">

                            <!-- center -->
                            <div>
                                <small>Cost Savings from</small>
                                <small class="orange">Increasing Productivity<br> with AP Automation</small>
                                <span id="cost_savings_from_increasing_productivity_with_ap_automation">$0</span>
                                <p>TOTAL ESTIMATED<br> ANNUAL SAVINGS</p>
                            </div>
                            <!-- end center -->

                        </div>
                        <!-- end box -->

                    </div>
                    <!-- end left -->

                    <!-- right -->
                    <div class="page_3__content-column-right">

                        <!-- cell -->
                        <div class="page_3__content-column-cell">

                            <!-- title -->
                            <div class="page_3__content-column-cell-title">

                                <div>
                                    <span>INTELLICHIEF</span>
                                </div>
                                <strong>CUSTOMERS</strong> <span>...</span>

                            </div>
                            <!-- end title -->

                            <!-- text -->
                            <div class="page_3__content-column-cell-text">
                                <p>Can process up to 75% of invoices without an AP clerk touching the invoice or validating the information.</p>
                                <p>Spend 90% less time printing, sorting, routing, and filing invoices.</p>
                                <p>Track invoices routed for approval more easily with instant search-and-retrieve functionality.</p>
                                <p>Don’t need to break out a calculator to deal with unit of measure conversions and line item discrepancies.</p>
                                <p>Eliminate 90% of manual data entry —an average of 3.5 hours reclaimed per employee per day.</p>
                                <p>Generate AP analytics reports automatically.</p>
                                <p>Utilize digital paper trails to research vendor, internal, and audit inquiries with 90% greater efficiency.</p>
                            </div>
                            <!-- end text -->

                        </div>
                        <!-- end cell -->

                    </div>
                    <!-- end right -->

                </div>
                <!-- end column -->

                <!-- quote -->
                <div class="page_2__content-quote">

                    <!-- title -->
                    <div class="page_2__content-quote-title">

                        <!-- center -->
                        <div>
                            <span>DID</span>
                            <span>YOU</span>
                            <span>KNOW?</span>
                        </div>
                        <!-- end center -->

                    </div>
                    <!-- end title -->

                    <!-- text -->
                    <div class="page_2__content-quote-text">

                        <!-- center -->
                        <div>
                            <p>Late payments, missed early payment discounts, and duplicate payments are 100% preventable with AP Automation.</p>
                            IntelliChief continuously monitors and cross-references invoice data to ensure that payment terms are satisfied as quickly as possible. For the first time, paying invoices will improve your bottom line.
                        </div>
                        <!-- end center -->

                    </div>
                    <!-- end text -->

                </div>
                <!-- end quote -->

            </div>
            <!-- end content -->

        </div>
        <!-- End Container -->

        <!-- footer -->
        <div class="report__page-footer">


        </div>
        <!-- end footer -->

    </div>
    <!-- end page 3 -->

    <!-- page 4 -->
    <div class="report__page page_4">

        <!-- Container -->
        <div class="report__page-wrapper">

            <!-- header -->
            <div class="report__page-header">

                <img src="<?= get_stylesheet_directory_uri() ?>/assets/calc/assets/images/report/header.jpg" alt="">

            </div>
            <!-- end header -->

            <!-- content -->
            <div class="page_4__content">

                <!-- text -->
                <div class="page_4__content-text">

                    <!-- title -->
                    <h2 class="page_4__content-text-title">
                        <span>How to Achieve the</span> Highest AP Automation Rates
                    </h2>
                    <!-- end title -->

                    <!-- excerpt -->
                    <div class="page_4__content-text-excerpt">
                        Not all AP Automation solutions are created equal. To achieve the highest AP Automation rates, you need to minimize processing errors by utilizing highly configurable workflows that work the way you do. The higher the number of AP invoices you can process without human intervention (straight-through processing), the bigger the savings! You should look for a solution with many advanced features designed to maximize your straight-through processing rates and allow your existing staff to better manage and control the entire AP process along with your company’s cash flow
                    </div>
                    <!-- end excerpt -->

                </div>
                <!-- end text -->

                <!-- table -->
                <div class="page_4__content-table">

                    <!-- thead -->
                    <div class="page_4__content-table-thead">
                        Key AP Automation Features to Maximize Straight-Through Processing
                    </div>
                    <!-- end thead -->

                    <!-- tbody -->
                    <ul class="page_4__content-table-tbody">

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    ERP Integration<br> with Auto<br> Vouchering
                                </div>

                                <p>
                                    Enterprise-class AP Automation solutions integrate with your ERP system to capture AP invoices, perform 2/3/4-matching processes, and voucher to your ERP system without any human intervention — saving you all the manual steps in between.
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Automated<br> GL Coding
                                </div>

                                <p>
                                    Intelligently reading line item detail from an invoice and then validating the data from your ERP system, such as vendor/supplier, part number, pricing, and quantities, allows for automated GL coding — saving your AP processors time
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    GL Coding<br> for Taxes
                                </div>

                                <p>
                                    Allocating taxes and shipping costs can be a cumbersome process, but not when the calculations are handled automatically by your AP Automation solution, paving the way for auto-vouchering
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Shipping Pricing<br> Tolerances
                                </div>

                                <p>
                                    Holding up vouchering of an invoice because of minor pricing differences only slows down the AP process. With AP Automation, you can set the level of tolerance for pricing differences to keep your AP process running smoothly and fficiently without contacting vendors/suppliers or waiting on management approvals.
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Part Number<br> Reconciliation
                                </div>

                                <p>
                                    AP Automation gives you the flexibility to create a crossreference table to match up the part numbers on the AP invoice with the part numbers in your ERP system, allowing those AP invoices to be processed automatically — even if those part numbers did not originally match
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Unit of Measure<br> Conversion
                                </div>

                                <p>
                                    With AP Automation, you no longer have to perform conversions when units of measure do not match. For example, if you receive drums of oil but your ERP system uses gallons for its unit of measure, it must be converted before your AP invoice can be vouchered and
                                    paid. AP Automation eliminates this step to boost straight through processingrates.
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                    </ul>
                    <!-- end tbody -->

                </div>
                <!-- end table -->

            </div>
            <!-- end content -->

        </div>
        <!-- End Container -->

        <!-- footer -->
        <div class="report__page-footer">



        </div>
        <!-- end footer -->

    </div>
    <!-- end page 4 -->

    <!-- page 5 -->
    <div class="report__page page_5">

        <!-- Container -->
        <div class="report__page-wrapper">

            <!-- header -->
            <div class="report__page-header">

                <img src="<?= get_stylesheet_directory_uri() ?>/assets/calc/assets/images/report/header.jpg" alt="">

            </div>
            <!-- end header -->

            <!-- content -->
            <div class="page_5__content">

                <!-- text -->
                <div class="page_4__content-text">

                    <!-- title -->
                    <h2 class="page_4__content-text-title">
                        <span>How to</span> Maximize AP Processing Efficiency
                    </h2>
                    <!-- end title -->

                    <!-- excerpt -->
                    <div class="page_4__content-text-excerpt">
                        Even the most powerful AP Automation solutions cannot process every AP invoice for payment automatically. Some invoices, particularly non-PO invoices, require some level of intervention in order to voucher it for payment. For example, some AP invoices will require engineering validation, management approval, or some other form of confirmation. An enterprise-level AP Automation solution provides the tools to ensure timely processing with complete visibility of the status of each AP invoice in the system, regardless of invoice type.
                    </div>
                    <!-- end excerpt -->

                </div>
                <!-- end text -->

                <!-- table -->
                <div class="page_4__content-table">

                    <!-- thead -->
                    <div class="page_4__content-table-thead">
                        Key AP Automation Features That Maximizes AP Processing Efficiency
                    </div>
                    <!-- end thead -->

                    <!-- tbody -->
                    <ul class="page_4__content-table-tbody page_5__content-table-tbody">

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Complex Approval<br> Process
                                </div>

                                <p>
                                    AP invoices often need complex or multi-level approvals based on pricing, quantities, totals or other factors. These invoices require workflow tools to streamline processing, such as timers to track how long each step takes, automated notifications for each step of the process, and alerts for managers and executives to identify habitual late approvers.
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Delegation<br> of Authority
                                </div>

                                <p>
                                    AP Automation provides an easy way to transfer workloads from absent or vacationing team members to present eam members, making it easy to load balance your AP processing work for maximum efficiency and fewer late payments
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Out-of-Office<br> Approvals
                                </div>

                                <p>
                                    AP Automation solutions need to allow for remote processing and approvals without having to purchase licensing for each out-of office user while keeping your sensitive financial information secure.
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Automatic Exception<br> Handling
                                </div>

                                <p>
                                    AP Automation solutions provide sophisticated logic and AI-based workflows to handle pricing exceptions, received quantity
                                    mismatches, damaged goods, and other discrepancies that would otherwise require manual intervention to resolve
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                        <li>

                            <!-- inner -->
                            <div class="page_4__content-table-tbody-inner">

                                <div>
                                    Approval Limits
                                </div>

                                <p>
                                    Automatically processing AP invoices (particularly non-PO invoices) requires sophisticated pre-approval criteria so that certain invoices can be processed without management approval based on the invoice amount, the supplier ID, or other factors.
                                </p>

                            </div>
                            <!-- end inner -->

                        </li>

                    </ul>
                    <!-- end tbody -->

                </div>
                <!-- end table -->

            </div>
            <!-- end content -->

        </div>
        <!-- End Container -->

        <!-- request -->
        <div class="page_5__request">

            <!-- center -->
            <div>

                <!-- title -->
                <div class="page_5__request-title">

                    <h3>Request an IntelliChief Demo Today!</h3>
                    <p>Are you ready to see what IntelliChief can do for your organization?</p>

                </div>
                <!-- end title -->

                <!-- text -->
                <div class="page_5__request-text">

                    <h5>Email us today at <a href="mailto:info@intellichief.com">info@intellichief.com</a>!</h5>
                    <p>Contact us today to schedule a complimentary AP Automation demo<br> and get a firsthand look at our award-winning solutions.</p>

                </div>
                <!-- end text -->

                <!-- footer -->
                <div class="page_5__request-footer">

                    Find <strong>@Intellichief</strong> on : LinkedIn | Twitter | YouTube

                </div>
                <!-- end footer -->

            </div>
            <!-- end center -->

        </div>
        <!-- end request -->

        <!-- footer -->
        <div class="report__page-footer">

            <!-- contacts -->
            <div class="report__page-footer-contacts">

                <!-- list -->
                <ul class="report__page-footer-contacts-list">

                    <li>
                        <span>World Headquarters</span>
                        <p>13095 Telecom Pkwy N, Tampa, FL 33637</p>
                    </li>

                    <li>
                        <span>Hq Office</span>
                        <p>813-971-9500</p>
                    </li>

                    <li>
                        <span>Web</span>
                        <p>intellichief.com</p>
                    </li>

                </ul>
                <!-- end list -->

            </div>
            <!-- end contacts -->

        </div>
        <!-- end footer -->

    </div>
    <!-- end page 5 -->

</div>
<!-- END PDF -->
<script src="<?= get_stylesheet_directory_uri() . '/assets/calc/assets/js/src/jquery/jquery.js' ?>"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="<?= get_stylesheet_directory_uri() . '/assets/calc/assets/js/bundle.js' ?>"></script>
</body>
</html>
