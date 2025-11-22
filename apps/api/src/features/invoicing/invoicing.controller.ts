import { Controller, Post } from '@nestjs/common';
import { InvoicingService } from './invoicing.service';

@Controller('invoicing')
export class InvoicingController {
  constructor(private readonly invoicingService: InvoicingService) {}

  @Post()
  async createNewInvoiceController() {
    const invoice = await this.invoicingService.createNewInvoiceService();
    return invoice;
  }
}
