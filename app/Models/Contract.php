<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Contract
 *
 * @property int $id
 * @property string $contract_number
 * @property string $title
 * @property string $type
 * @property string $status
 * @property int $project_id
 * @property string $contractor_name
 * @property string $scope_of_work
 * @property string $contract_value
 * @property \Illuminate\Support\Carbon $start_date
 * @property \Illuminate\Support\Carbon $end_date
 * @property string|null $payment_terms
 * @property string|null $special_conditions
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Project $project
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Contract newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contract newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contract query()
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereContractNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereStatus($value)

 * 
 * @mixin \Eloquent
 */
class Contract extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'contract_number',
        'title',
        'type',
        'status',
        'project_id',
        'contractor_name',
        'scope_of_work',
        'contract_value',
        'start_date',
        'end_date',
        'payment_terms',
        'special_conditions',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'contract_value' => 'decimal:2',
    ];

    /**
     * Get the project that owns the contract.
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}