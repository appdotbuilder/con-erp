<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->id();
            $table->string('contract_number')->unique();
            $table->string('title');
            $table->enum('type', ['main_contract', 'subcontract', 'supply_contract', 'service_contract']);
            $table->enum('status', ['draft', 'pending', 'active', 'completed', 'terminated']);
            $table->foreignId('project_id')->constrained()->onDelete('cascade');
            $table->string('contractor_name');
            $table->text('scope_of_work');
            $table->decimal('contract_value', 15, 2);
            $table->date('start_date');
            $table->date('end_date');
            $table->text('payment_terms')->nullable();
            $table->text('special_conditions')->nullable();
            $table->timestamps();
            
            $table->index(['project_id', 'status']);
            $table->index('start_date');
            $table->index('contract_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contracts');
    }
};