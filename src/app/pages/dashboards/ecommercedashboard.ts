import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Table, TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Product, ProductService } from '@/pages/service/product.service';
import { LayoutService } from '@/layout/service/layout.service';
import { debounceTime, Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-ecommerce-dashboard',
    imports: [ChartModule, TableModule, MenuModule, ButtonModule, InputTextModule, FormsModule, CommonModule, IconFieldModule, InputIconModule, TagModule, RippleModule, CardModule],
    //templateUrl: './ecommercedashboard.html', 
    template : `<div class="text-xl font-semibold">Admin Dashboard</div>
<div class="text-gray-500 text-sm">Welcome Back! Here's an overview of all your systems.</div> <br />
<div class="grid grid-cols-12 gap-8">
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="p-4 text-white h-24 rounded-border m-0 bg-center bg-cover bg-no-repeat bg-cyan-400"
            style="background-image: url('/demo/images/dashboard/effect-1.svg')">
            <div class="font-bold w-full mb-2">
                <span>Total Users</span>
            </div>
            <div class="text-white text-2xl font-bold w-full flex items-center py-1">150 <i
                    class="pi pi-arrow-up ml-2 font-bold"></i></div>
        </div>
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="p-4 text-white h-24 rounded-border m-0 bg-center bg-cover bg-no-repeat bg-orange-400"
            style="background-image: url('/demo/images/dashboard/effect-2.svg')">
            <div class="font-bold w-full mb-2">
                <span>Active Queries</span>
            </div>
            <div class="text-white text-2xl font-bold w-full flex items-center py-1">532 <i
                    class="pi pi-arrow-up ml-2 font-bold"></i></div>
        </div>
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="p-4 text-white h-24 rounded-border m-0 bg-center bg-cover bg-no-repeat bg-purple-400"
            style="background-image: url('/demo/images/dashboard/effect-3.svg')">
            <div class="font-bold w-full mb-2">
                <span>Certification</span>
            </div>
            <div class="text-white text-2xl font-bold w-full flex items-center py-1">450 <i
                    class="pi pi-arrow-down ml-2 font-bold"></i></div>
        </div>
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="p-4 text-white h-24 rounded-border m-0 bg-center bg-cover bg-no-repeat bg-slate-400"
            style="background-image: url('/demo/images/dashboard/effect-4.svg')">
            <div class="font-bold w-full mb-2">
                <span>Audit Completed</span>
            </div>
            <div class="text-white text-2xl font-bold w-full flex items-center py-1">143 <i
                    class="pi pi-arrow-down ml-2 font-bold"></i></div>
        </div>
    </div>

    <div class="col-span-12 lg:col-span-6">
        <div class="card ">
            <div class="flex items-center justify-between mb-6">
                <h2><b>Query Management</b></h2>
                <div class="ml-auto">
                    <a href="#" class="text-blue-600 text-sm font-medium hover:underline">View All →</a>
                </div>
            </div>
            <div class="flex items-center justify-between card">
                <div class="flex w-7/12 items-center justify-between">
                    <div class="flex flex-col">
                        <span class="font-medium">Regulation Compliance</span>
                        <span class="text-muted-color">Submitted by : Alex Johnson</span>
                    </div>
                </div>
                <div class="w-5/12 flex justify-end">
                    <p-button label="Pending" severity="warn" text />
                </div>
            </div>
            <div class="flex items-center justify-between card">
                <div class="flex w-7/12 items-center justify-between">
                    <div class="flex flex-col">
                        <span class="font-medium">Certiifcate Renewal</span>
                        <span class="text-muted-color">Submitted by : Sarah Miller</span>
                    </div>
                </div>
                <div class="w-5/12 flex justify-end">
                    <p-button label="Resolved" severity="success" text />
                </div>
            </div>
            <div class="flex items-center justify-between card">
                <div class="flex w-7/12 items-center justify-between">
                    <div class="flex flex-col">
                        <span class="font-medium">Testing Procedure</span>
                        <span class="text-muted-color">Submitted by : David Wang</span>
                    </div>
                </div>
                <div class="w-5/12 flex justify-end">
                    <p-button label="Urgent" severity="danger" text />
                </div>
            </div>

            <div class="col-span-12 lg:col-span-6">
                <p-button label="Manage Queries" outlined styleClass="w-full" />
            </div>
        </div>
    </div>

    <div class="col-span-12 lg:col-span-6">
        <div class="card ">
            <div class="flex items-center justify-between mb-6">
                 <h2><b>Regulation Updates</b></h2>
                <div class="ml-auto">
                    <a href="#" class="text-blue-600 text-sm font-medium hover:underline">View All →</a>
                </div>
            </div>
            <div class="flex items-center justify-between card">
                <div class="flex w-7/12 items-center justify-between">
                    <div class="flex flex-col">
                        <span class="font-medium">ISO 27001:2025 Update</span>
                        <span class="text-muted-color">New security controls for cloud.</span>
                    </div>
                </div>
                <div class="w-5/12 flex justify-end">
                    <span class="text-muted-color"> May 12, 2025 </span>
                </div>
            </div>
            <div class="flex items-center justify-between card">
                <div class="flex w-7/12 items-center justify-between">
                    <div class="flex flex-col">
                        <span class="font-medium">GDPR Amendment</span>
                        <span class="text-muted-color">Updated data processing</span>
                    </div>
                </div>
                <div class="w-5/12 flex justify-end">
                    <span class="text-muted-color"> April 11, 2025 </span>
                </div>
            </div>
            <div class="flex items-center justify-between card">
                <div class="flex w-7/12 items-center justify-between">
                    <div class="flex flex-col">
                        <span class="font-medium">FDA Regulation 21 CFR Part 11</span>
                        <span class="text-muted-color">Electronic records compliance</span>
                    </div>
                </div>
                <div class="w-5/12 flex justify-end">
                    <span class="text-muted-color"> March 11, 2025 </span>
                </div>
            </div>

            <div class="col-span-12 lg:col-span-6">
                <p-button label="View Regulations" outlined styleClass="w-full" />
            </div>
        </div>
    </div>

</div>`,
    providers: [ProductService]
})
export class EcommerceDashboard {
    products!: Product[];

    chartData: any;

    chartOptions: any;

    layoutService: LayoutService = inject(LayoutService);

    items!: MenuItem[];

    cols: any[] = [];

    subscription!: Subscription;

    @ViewChild('chatcontainer') chatContainerViewChild!: ElementRef;

    queries = [
        { title: 'Regulation Compliance', submitter: 'Alex Johnson', status: 'Pending' },
        { title: 'Certificate Renewal', submitter: 'Sarah Miller', status: 'Resolved' },
        { title: 'Testing Procedure', submitter: 'David Wong', status: 'Urgent' }
    ];

    regulations = [
        { title: 'ISO 27001:2025 Update', description: 'New security controls...', date: 'May 12, 2025' },
        { title: 'GDPR Amendment', description: 'Updated data processing...', date: 'Apr 28, 2025' },
        { title: 'FDA Regulation 21 CFR Part 11', description: 'Electronic records...', date: 'Apr 15, 2025' }
    ];




    constructor(private productService: ProductService) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(50)).subscribe((config) => {
            this.chartInit();
        });
    }

    ngOnInit() {
        this.productService.getProducts().then((data) => (this.products = data));

        this.cols = [
            { header: 'Name', field: 'name' },
            { header: 'Category', field: 'category' },
            { header: 'Price', field: 'price' },
            { header: 'Status', field: 'inventoryStatus' }
        ];

        this.chartInit();
    }
    statusClass(status: string): string {
        return {
            'Pending': 'bg-yellow-100 text-yellow-800',
            'Resolved': 'bg-green-100 text-green-800',
            'Urgent': 'bg-red-100 text-red-800'
        }[status] || 'bg-gray-100 text-gray-800';
    }
    chartInit() {
        const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
        const surfaceBorder = getComputedStyle(document.body).getPropertyValue('--surface-border');

        this.items = [
            {
                label: 'Options',
                items: [
                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                    { label: 'Search', icon: 'pi pi-fw pi-search' }
                ]
            }
        ];

        this.chartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'New',
                    data: [11, 17, 30, 60, 88, 92],
                    backgroundColor: 'rgba(13, 202, 240, .2)',
                    borderColor: '#0dcaf0',
                    pointBackgroundColor: '#0dcaf0',
                    pointBorderColor: '#0dcaf0',
                    pointBorderWidth: 0,
                    pointStyle: 'line',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Completed',
                    data: [11, 19, 39, 59, 69, 71],
                    backgroundColor: 'rgba(253, 126, 20, .2)',
                    borderColor: '#fd7e14',
                    pointBackgroundColor: '#fd7e14',
                    pointBorderColor: '#fd7e14',
                    pointBorderWidth: 0,
                    pointStyle: 'line',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Canceled',
                    data: [11, 17, 21, 30, 47, 83],
                    backgroundColor: 'rgba(111, 66, 193, .2)',
                    borderColor: '#6f42c1',
                    pointBackgroundColor: '#6f42c1',
                    pointBorderColor: '#6f42c1',
                    pointBorderWidth: 0,
                    pointStyle: 'line',
                    fill: true,
                    tension: 0.4
                }
            ]
        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.9,
            plugins: {
                legend: {
                    fill: true,
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    max: 100,
                    min: 0,
                    grid: {
                        color: surfaceBorder
                    },
                    ticks: {
                        color: textColor
                    }
                },
                x: {
                    grid: {
                        display: true,
                        color: surfaceBorder
                    },
                    ticks: {
                        color: textColor,
                        beginAtZero: true
                    }
                }
            }
        };
    }

    onEmojiClick(chatInput: any, emoji: string) {
        if (chatInput) {
            chatInput.value += emoji;
            chatInput.focus();
        }
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    getBadgeSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return 'info';
        }
    }
}
